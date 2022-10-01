"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../Models/User"));
const sequelize_1 = require("sequelize");
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: "./env" });
function connecttopostgreSQL() {
    const sequelize = new sequelize_1.Sequelize({ host: '127.0.0.1',
        port: 5432,
        database: "payzreg",
        dialect: "postgres",
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
    });
    // line below tests connection is ok. 
    sequelize.authenticate()
        .then(() => {
        console.log("Connected to postgreSQL");
    }).catch((err) => {
        console.error(err);
        process.exit(1);
    });
    return sequelize;
}
const server = (0, express_1.default)();
const port = 5002;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    connecttopostgreSQL();
    server.get("/", (req, res) => {
        res.send("Main");
    });
    server.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        connecttopostgreSQL();
        try {
            let reguser = yield User_1.default.create({
                firstname: "Jose Ignacio",
                lastname: "Naranjo",
                email: "naranjojose256@gmail.com",
                username: "jnar5",
                password: "postgres",
            });
            /*
            await reguser.save();
            console.log(reguser.toJSON());
            */
        }
        catch (err) {
            console.error(err);
            process.exit(1);
        }
    }));
    server.listen(port, () => {
        console.log(`server Listening on port ${port}!`);
    });
});
main().catch((err) => {
    console.error(err);
});
