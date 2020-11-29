import { IpTypeModel } from './ip-type.model';
import { LinkTypeInterface } from '../interfaces';
import { HostTypeModel } from './host-type.model';

export enum LinkTypes {
  IP = 'ip',
  HOST = 'host'
}


export abstract class LinkTypeResolver {

  public static getInitModel(data): LinkTypeInterface {
    return new IpTypeModel(data.value);
  }

  public static getModelOfType(data): LinkTypeInterface {
    switch (data.linkType) {
      case LinkTypes.IP: {
        return new IpTypeModel(data);
      }
      case LinkTypes.HOST: {
        return new HostTypeModel(data);
      }
    }
  }
}
