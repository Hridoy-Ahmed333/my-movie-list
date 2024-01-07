import { useEffect, useState } from "react";

export function useKey(key, callback) {
  useEffect(
    function () {
      function lol(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          callback();
        }
      }
      document.addEventListener("keydown", lol);
      return function () {
        document.removeEventListener("keydown", lol);
      };
    },
    [callback, key]
  );
}
