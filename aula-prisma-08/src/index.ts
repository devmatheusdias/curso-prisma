import prisma from "./database";

async function orderByClass(){

  const result = await prisma.student.groupBy({
    by: ["class"],
    _count: {
      id: true,
    },
    orderBy: {
      _count: {
        id: 'desc',
      },
    },
  });
  
  return result
}


async function unemployedStudents() {
  const result = await prisma.student.groupBy({
    by: ["class"],
    _count: {
        id: true
    },
    where: {
      jobId: null
    },
    orderBy:{
      _count: {
        id: 'desc'
      }
    }
  });
  
  return result
}

(async () => {
  orderByClass()
  unemployedStudents()
})