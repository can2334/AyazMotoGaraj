"use client";
import { useEffect } from "react";

export default function PageSEO({ title }: { title: string }) {
    useEffect(() => {
        document.title = `${title} | Ayaz Moto Garaj`;
    }, [title]);

    return null;
}