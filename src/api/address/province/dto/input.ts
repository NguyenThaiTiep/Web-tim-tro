import { Expose } from "class-transformer";

export class ProvinceInputDto {
  @Expose()
  id?: number;
  @Expose()
  code?: string;
  @Expose()
  name?: string;
}
