import { NextRequest, NextResponse } from "next/server";
import { ZodSchema } from "zod";

// This function now directly throws an error if validation fails
export const validate = (schema: ZodSchema<any>, data: any) => {
  try {
    schema.parse(data);
  } catch (error: any) {
    throw new Error(JSON.stringify(error.errors));
  }
};

export default function (request: NextRequest) {
  // Your middleware logic here
  return NextResponse.next();
}
