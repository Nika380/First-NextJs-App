import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(req: NextApiRequest) {
  try {
    const url = req.url;
    const getPostId = url?.split("/posts/")[1] as string;
    const postId = parseInt(getPostId);
    await prisma.posts.delete({
      where: { id: Number(postId) },
    });
    return NextResponse.json("Item Deleted Successfully", { status: 202 });
  } catch (error) {
    return NextResponse.json("Something Went Wrong", {
      status: 400,
    });
  } finally {
    prisma.$disconnect();
  }
}
