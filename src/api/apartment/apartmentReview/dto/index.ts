import { Expose, Type } from "class-transformer";
import { UserTitleDto } from "../../../user/user/dto";

export class ApartmentReviewInputDto {
  id?: number;
  content?: string;
  star?: number;
  userId?: number;
  apartmentId?: number;
}
export class ApartmentReviewGetDto {
  @Expose()
  id?: number;
  @Expose()
  content?: string;
  @Expose()
  star?: number;
  @Expose()
  create_at?: Date;
  @Expose()
  @Type((type) => UserTitleDto)
  user?: UserTitleDto;
}
export class ApartmentListGetDto {
  @Expose()
  id?: number;
  @Expose()
  title?: string;
  @Expose()
  price?: number;
  @Expose()
  reviewCount?: number;
}
