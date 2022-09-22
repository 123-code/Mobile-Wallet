"use strict";
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
const sequelize_1 = require("sequelize");
function connecttopostgreSQL() {
    const sequelize = new sequelize_1.Sequelize({ host: "localhost",
        port: 5432,
        database: "payzreg",
        dialect: "postgres",
        username: "jnar",
        password: "postgres",
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
    server.listen(port, () => {
        console.log(`server Listening on port ${port}!`);
    });
});
main().catch((err) => {
    console.error(err);
});
