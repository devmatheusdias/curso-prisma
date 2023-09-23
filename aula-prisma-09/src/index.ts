import express, { Request, Response } from "express";
import prisma from "./database";

const app = express();

app.get("/customers", async (req: Request, res: Response) => {
  try {
    const customers = await prisma.customer.findMany();
    res.send(customers);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

async function checkOrCreateDefaultUser() {
    const result = await prisma.customer.upsert({
      create: {
        firstName: "Geraldo",
        lastName: "Luiz Datena",
        document: "133.245.497-60"
      },
      where: {
        document: "133.245.497-60"
      },
      update: {}
    })
}

checkOrCreateDefaultUser()

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});