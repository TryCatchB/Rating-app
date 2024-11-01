import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPage } from '@/api/page';
import { getMenu } from '@/api/menu';

export const metadata: Metadata = {
  title: 'Products Page',
};

export async function generateStaticParams() {
  const menu = await getMenu(0);

  return menu.flatMap((item) =>
    item.pages.map((page) => ({ alias: page.alias })),
  );
}

const Courses = async ({ params }: { params: { alias: string } }) => {
  const page = await getPage(params.alias);

  if (!page) {
    notFound();
  }

  return <div>Product {page.title}</div>;
};

export default Courses;
