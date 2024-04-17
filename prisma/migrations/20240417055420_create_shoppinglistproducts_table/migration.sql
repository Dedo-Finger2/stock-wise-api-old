-- CreateTable
CREATE TABLE "shopping_list_products" (
    "produtct_id" TEXT NOT NULL,
    "shopping_list_id" TEXT NOT NULL,
    "quantity_bought" DOUBLE PRECISION NOT NULL,
    "price_paid" MONEY
);

-- CreateIndex
CREATE UNIQUE INDEX "shopping_list_products_produtct_id_shopping_list_id_key" ON "shopping_list_products"("produtct_id", "shopping_list_id");

-- AddForeignKey
ALTER TABLE "shopping_list_products" ADD CONSTRAINT "shopping_list_products_produtct_id_fkey" FOREIGN KEY ("produtct_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shopping_list_products" ADD CONSTRAINT "shopping_list_products_shopping_list_id_fkey" FOREIGN KEY ("shopping_list_id") REFERENCES "shopping_lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
