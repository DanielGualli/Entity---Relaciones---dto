import { Injectable } from '@nestjs/common';
import { CreatepublicacionDto } from './dto/create-publicacion.dto';
import { UpdateDto } from './dto/update-publicacion.dto';

@Injectable()
export class DistribuidorService {
  create(createpublicacionDto: CreatepublicacionDto) {
    return 'This action adds a new publicacion';
  }

  findAll() {
    return `This action returns all publicacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} publicacion`;
  }

  update(id: number, updatepublicacionDto: UpdateDto) {
    return `This action updates a #${id} publicacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} publicacion`;
  }
}
