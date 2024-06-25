import mongoose, { Schema } from "mongoose";
import {
  ProductCollection,
  ProductSize,
  ProductStatus,
  ProductVolume,
} from "../libs/enums/product.enum";

// Schema first & Code first

const productSchema = new Schema(
  {
    productStatus: {
      type: String,
      enum: ProductStatus,
      default: ProductStatus.PAUSE,
    },

    ProductCollection: {
      type: String,
      enum: ProductCollection,
      required: true,
    },

    ProductName: {
      type: String,
      required: true,
    },

    ProductPrice: {
      type: Number,
      required: true,
    },

    ProductLeftCount: {
      type: Number,
      required: true,
    },

    ProductSize: {
      type: String,
      enum: ProductSize,
      required: true,
    },

    ProductVolume: {
      type: Number,
      enum: ProductVolume,
      required: true,
    },
    ProductDesc: {
      type: String,
    },
    ProductImage: {
      type: [String],
      default: [],
    },
    ProductViews: {
      type: Number,
      default: 0,
    },
  },

  { timestamps: true } // createdAt updatedAt
);

productSchema.index(
  { productName: 1, productSize: 1, productValue: 1 },
  { unique: true }
);

export default mongoose.model("Products", productSchema);
