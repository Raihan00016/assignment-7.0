import Link from 'next/link';
import React from 'react';

const Navlinks = async () => {
    const res = await fetch ("https://openapi.programming-hero.com/api/bazardor/categories")
    const data = await res.json()
    // const navs = data.datasets
    console.log(data);
    return (
        <div className='flex ml-80 pt-3 gap-5'>
            {data.map((n, i) => <Link key={i} href={n.slug}>{n.icon}{n.nameBn}</Link>)}
        </div>
    );
};

export default Navlinks;