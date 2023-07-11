import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSwr from "swr";

const fetcher = (url: string) => fetch(url).then((response) => response.json());

export default function useUser() {
  const { data, error } = useSwr("/api/users/me", fetcher);
  const router = useRouter();
  // return router.replace("/enter");
  return data;
}  
