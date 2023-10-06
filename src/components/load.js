'use client';
import React from "react";
import { Spinner } from 'flowbite-react';

export default function Load() {
  return (
    <>
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    </>
  )
}


