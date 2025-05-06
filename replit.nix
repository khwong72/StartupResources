{ pkgs }: {
  deps = [
    pkgs.nodejs-20_x
    pkgs.nodePackages.typescript
    pkgs.postgresql_16
    pkgs.yarn
    pkgs.esbuild
  ];
} 