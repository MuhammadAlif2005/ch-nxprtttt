/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  moq: string;
  rating: number;
  sellerName: string;
  sellerVerified: boolean;
  image: string;
  location: string;
  description: string;
  specifications: Record<string, string>;
  story: string;
}

export interface Exporter {
  id: string;
  name: string;
  location: string;
  verified: boolean;
  rating: number;
  productsCount: number;
  responseTime: string;
  description: string;
  image: string;
}

export type UserRole = 'BUYER' | 'EXPORTER' | 'ADMIN' | 'GUEST';
