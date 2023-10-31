import { PartialType } from '@nestjs/mapped-types';
import { CreatepublicacionDto } from './create-publicacion.dto';

export class UpdateDistribuidorDto extends PartialType(CreatepublicacionDto) {}
