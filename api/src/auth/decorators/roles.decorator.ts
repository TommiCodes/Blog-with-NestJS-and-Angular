import { SetMetadata } from "@nestjs/common";

export const hasRoles = (...hasRoles: string[]) => SetMetadata('roles', hasRoles);