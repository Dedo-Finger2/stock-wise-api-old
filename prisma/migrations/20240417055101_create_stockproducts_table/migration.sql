-- CreateTable
CREATE TABLE "stock_products" (
    "product_id" TEXT NOT NULL,
    "stock_id" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "added_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "stock_products_product_id_stock_id_key" ON "stock_products"("product_id", "stock_id");

-- AddForeignKey
ALTER TABLE "stock_products" ADD CONSTRAINT "stock_products_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock_products" ADD CONSTRAINT "stock_products_stock_id_fkey" FOREIGN KEY ("stock_id") REFERENCES "stocks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
