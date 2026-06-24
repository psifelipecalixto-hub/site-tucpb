/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface LogoProps {
  className?: string;
  id?: string;
}

export default function Logo({ className = "h-16 w-16", id = "tucpb-logo" }: LogoProps) {
  return (
    <img
      id={id}
      src="/logo.jpg"
      alt="Logo TUCPB"
      className={`${className} select-none transition-transform duration-300 hover:scale-105 object-contain rounded-full`}
    />
  );
}
