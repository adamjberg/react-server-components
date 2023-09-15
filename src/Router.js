"use client";

import { use, useState } from "react";
import { createFromFetch } from "react-server-dom-webpack/client";

const cache = new Map();

export function Router() {
  let content = cache.get("home");
  if (!content) {
    content = createFromFetch(fetch("/react"));
    cache.set("home", content);
  }

  return (
    <>
      {use(content)}
    </>
  );
}
