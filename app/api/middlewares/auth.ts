import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../common/jwt";

export const Auth = 
  async (req: any, res: Response, next: NextFunction) => {
    try{
    let token: string | undefined;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized to access this route",
      }
      );
    }
    try {
      const decoded = verifyToken(token);
      req.user = decoded.id;
      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Not authorized to access this route",
      });
    }
  } catch (error) {
    next(error);
  }
  }

