import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { title, body } = await req.json();
    const post = await prisma.posts.create({
      data: {
        title,
        body,
      },
    });
    return NextResponse.json(post, { status: 201 }); // Use the NextResponse object to construct the response
  } catch (error) {
    return NextResponse.json("Something Went Wrong", { status: 400 }); // Use the NextResponse object to construct the response
  }
}

export async function GET() {
  const posts = await prisma.posts.findMany();

  return NextResponse.json(posts);
}

export async function DELETE(req: DeleteRequest) {
  const { id } = req.json();
  const itemToDelete = await prisma.posts.findFirst({
    where: { id },
  });
  
  try {
    await prisma.posts.delete({
      where: { id },
    });
    return NextResponse.json("Item Deleted Successfully", { status: 202 });
  } catch (error) {
    const requestBody = req.json();
    return NextResponse.json("Something Went Wrong: \n" + requestBody.id, {
      status: 400,
    });
  }
}

interface Request {
  json():
    | { title: string; body: string }
    | PromiseLike<{ title: string; body: string }>;
  title: string;
  body: string;
}

interface DeleteRequest {
  json(): { id: number };
  id: number;
}
