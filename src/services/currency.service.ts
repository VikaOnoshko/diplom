import { Request } from '@providers/request';

export const CurrencyService = {
  getList() {
    return Request.get<NBCurrency[]>(
      'https://api.nbrb.by/exrates/rates?periodicity=0',
    ).then((response) =>
      response.data.map((item) => ({
        name: item.Cur_Abbreviation,
        rate: item.Cur_OfficialRate,
      })),
    );
  },
};
