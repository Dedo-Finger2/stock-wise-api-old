-- CreateTable
CREATE TABLE "product_price_logs" (
    "id" SERIAL NOT NULL,
    "product_id" TEXT NOT NULL,
    "price" MONEY NOT NULL,

    CONSTRAINT "product_price_logs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "product_price_logs" ADD CONSTRAINT "product_price_logs_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
