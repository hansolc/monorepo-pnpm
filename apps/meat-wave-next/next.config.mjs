import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
/** @type {import('next').NextConfig} */

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {};

export default withVanillaExtract(nextConfig);
