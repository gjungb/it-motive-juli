import { IsOptional, IsString, MinLength } from "class-validator";

export class CreateMaterialDto {
    @IsString()
    name: string;

    @IsString()
    @MinLength(3)
    matnum: string;

    @IsOptional()
    description?: string
}
