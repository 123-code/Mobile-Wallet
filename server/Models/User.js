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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@sequelize/core");
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: ".env" });
const sequelize = new core_1.Sequelize('postgres::memory:');
const payzuser = sequelize.define("Payz-User", {
    firstname: {
        type: core_1.DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: core_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: core_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        // email validation regex
        validate: {
            is: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        }
    },
    username: {
        type: core_1.DataTypes.TEXT,
        allowNull: false,
        unique: true,
    },
    /*
    Shoud change to hashed password inside of database
    being used just for database testing purposes.
    */
    password: {
        type: core_1.DataTypes.STRING,
        allowNull: false,
    }
});
exports.default = payzuser;
