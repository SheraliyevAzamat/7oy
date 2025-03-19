import jwt from "jsonwebtoken";
import { Payload } from "../../constants";
import { config } from "../../config";

export const generateAccessToken = (payload: Payload) => {
  try {
    const token = jwt.sign(payload, config.jwt.access.secret, {
      expiresIn: 1,
    });
    return token
  } catch (error) {
    throw new Error(error)
  }
};

export const generateRefreshToken = (payload: Payload) => {
  try {
    const token = jwt.sign(payload, config.jwt.refresh.secret, {
      expiresIn: config.jwt.refresh.expiresIn,
    });
    return token
  } catch (error) {
    throw new Error(error)
  }
};