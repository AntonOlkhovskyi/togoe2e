import {$, $$, browser, by, ElementArrayFinder, ElementFinder, Key} from 'protractor';
import {forEach} from '@angular/router/src/utils/collection';
import {__await} from 'tslib';
import {Helper} from '../helper/helper';

export class NewShowPage {
  static hostDropDwn: ElementFinder = $('select[name="host"]');
  static titleInput: ElementFinder = $('#admin-show-title');
  static previewImageInput: ElementFinder = $('#admin-show-preview-image');
  static sponsorImageInput: ElementFinder = $('#admin-show-sponsor-image');
  static startOnDatePicker: ElementFinder = $('#admin-show-starts_on');
  static endsOnDatePicker: ElementFinder = $('#admin-show-ends_on');
  static linkOnWinnerVideoInput: ElementFinder = $('#admin-show-winner-video');
  static linkOnLoserVideoInput: ElementFinder = $('#admin-show-attempts');
  static titleForLoserButtonInput: ElementFinder = $('#admin-show-loser-screen-button');
  static titleForWinnerButtonInput: ElementFinder = $('#admin-show-winner-screen-button');
  static linkForLoserButtonInput: ElementFinder = $('#admin-show-loser-link-button');
  static linkForWinnerButtonInput: ElementFinder = $('#admin-show-winner-link-button');
  static numberOfAttempts: ElementFinder = $('#admin-show-number-of-attempts');
  static productImageImage: ElementFinder = $('#admin-show-product-thumbnail');
  static numberOfWinnerInput: ElementFinder = $('#admin-show-number-of-winners');
  static showStatusRdb: ElementArrayFinder = $$('#admin-show-status');
  static videoAutoPlaiRdb: ElementArrayFinder = $$('#admin-show-video-auto-play-yes');
  static shopifyItemIDInput: ElementFinder = $('#admin-show-shopidfy-item-id');


  static async createNewShow(dataProvider) {
    await Helper.selectDropDownValue(this.hostDropDwn, dataProvider.hostValue);
    await Helper.setInputValue(this.titleInput, dataProvider.title);
    await Helper.setInputValue(this.previewImageInput, dataProvider.previewImageUrl);
    await Helper.setInputValue(this.sponsorImageInput, dataProvider.sponsorImageUrl);
    await this.startOnDatePicker.sendKeys(dataProvider.startOnDate, Key.ARROW_DOWN);
      await this.endsOnDatePicker.sendKeys(dataProvider.endsOnDate, Key.ARROW_DOWN);

    /*await Helper.setInputValue(this.sponsorImageInput, dataProvider.sponsorImageUrl);
    await Helper.setInputValue(this.sponsorImageInput, dataProvider.sponsorImageUrl);
    await Helper.setInputValue(this.sponsorImageInput, dataProvider.sponsorImageUrl);
    await Helper.setInputValue(this.sponsorImageInput, dataProvider.sponsorImageUrl);*/


  }

}
