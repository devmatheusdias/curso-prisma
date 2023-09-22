import prisma from "@/database/database";
import {Product} from "@prisma/client"

const TABLE_NAME = "products";

type createProduct = Omit<Product, "id">;
type updateProduct = createProduct;


async function getProducts() {
    const result = await prisma.product.findMany();
    return result;
}

async function getProduct(id: number) {
    const result = await prisma.product.findFirst({
      where: {id}
    })

    return result
}

async function createProduct(product: createProduct) {
   const result = await prisma.product.create({
      data: product
   })

   return result;
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct
}

export default productRepository;