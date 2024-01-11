import jsonPackage from 'package.json';
import { constants } from 'src/environments/constants';

export const environment = {
  production: true,
  urlBackend: "",
  secret: "2022/"+constants.appinitials+'#'+jsonPackage.name+'/'+jsonPackage.version+'#'+constants.appinitials+"/"+"2022",
  fakeToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjEsInVzZXIiOiIzMjM4NTI3NDE3NyIsIm5vbWUiOiIyIFRFTiBGRVJOQURBIExJTUEiLCJncnVwb3MiOlsiQURNSU4iXX0.BRp64vTXbNUPMmq2UTJL-aS28_IZZFU4M9kIaA25QUI"
};
