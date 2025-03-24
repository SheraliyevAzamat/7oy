import express from 'express';
import { config } from './config/index';
import { countryRouter, merchantActivityRouter, merchantRouter, orderRouter, productRouter, setUpRouter, userRouter } from './router';
import { apiRouter } from './router/api.routes';
import { tagRouter } from './router/tag.routes';
import { productTagRouter } from './router/productTag.routes';

const app = express();

const PORT =  5001;
app.use(express.json());

app.use("/api/orders", orderRouter);
app.use("/api/users", userRouter);
app.use("/api/product-tags",productTagRouter);
app.use("/api/products", productRouter);
app.use("/api/tags", tagRouter);
app.use("/api/merchant-activities", merchantActivityRouter);
app.use("/api/merchants", merchantRouter);
app.use("/api/countries", countryRouter);
app.use("/setup", setUpRouter);
app.use("/api", apiRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 