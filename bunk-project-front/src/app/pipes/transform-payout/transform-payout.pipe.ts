import { Pipe, PipeTransform } from '@angular/core';
import { PayoutsItem } from 'src/app/interfaces';

@Pipe({
  name: 'transformPayout',
  pure: true
})
export class TransformPayoutPipe implements PipeTransform {

  transform(payoutItem: PayoutsItem): unknown {
    const transformedPayout = `${payoutItem.owed} owes ${payoutItem.owes} - $${payoutItem.amount}`
    return transformedPayout;
  }

}
