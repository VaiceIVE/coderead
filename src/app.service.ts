import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Qrdata } from './qrdata.entity';

@Injectable()
export class AppService {
  constructor(
    @Inject("QR_REPOSITORY")
    private qrRepository: Repository<Qrdata>
  ){}
  postData(data: Record<string, any>) {
    
    //TODO

    var Barcode = data.Barcode
    var Scanned = data.Scanned

    return this.qrRepository.insert({
      Barcode: data.Barcode, 
      ScanState: data.ScanState, 
      UserID: data.UserID,
      UserName: data.UserName,
      Scanned: data.Scanned, 
      Location: data.Location,
      Timezone: data.Timezone
    })
  }
}
