"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cordova_1 = require("cordova");
var execP = function (methodName, opts) {
    return new Promise(function (resolve, reject) {
        cordova_1.exec(resolve, reject, 'CordovaStripe', methodName, [opts]);
    });
};
var NOOP = function () {
};
var CordovaStripe;
(function (CordovaStripe) {
    var UIButtonType;
    (function (UIButtonType) {
        UIButtonType["SUBMIT"] = "submit";
        UIButtonType["CONTINUE"] = "continue";
        UIButtonType["NEXT"] = "next";
        UIButtonType["CANCEL"] = "cancel";
        UIButtonType["RESEND"] = "resend";
        UIButtonType["SELECT"] = "select";
    })(UIButtonType = CordovaStripe.UIButtonType || (CordovaStripe.UIButtonType = {}));
    var SourceType;
    (function (SourceType) {
        SourceType["ThreeDeeSecure"] = "3ds";
        SourceType["GiroPay"] = "giropay";
        SourceType["iDEAL"] = "ideal";
        SourceType["SEPADebit"] = "sepadebit";
        SourceType["Sofort"] = "sofort";
        SourceType["AliPay"] = "alipay";
        SourceType["AliPayReusable"] = "alipayreusable";
        SourceType["P24"] = "p24";
        SourceType["VisaCheckout"] = "visacheckout";
    })(SourceType = CordovaStripe.SourceType || (CordovaStripe.SourceType = {}));
    var CardBrand;
    (function (CardBrand) {
        CardBrand["AMERICAN_EXPRESS"] = "AMERICAN_EXPRESS";
        CardBrand["DISCOVER"] = "DISCOVER";
        CardBrand["JCB"] = "JCB";
        CardBrand["DINERS_CLUB"] = "DINERS_CLUB";
        CardBrand["VISA"] = "VISA";
        CardBrand["MASTERCARD"] = "MASTERCARD";
        CardBrand["UNIONPAY"] = "UNIONPAY";
        CardBrand["UNKNOWN"] = "UNKNOWN";
    })(CardBrand = CordovaStripe.CardBrand || (CordovaStripe.CardBrand = {}));
    var SourceTypeArray = Object.keys(SourceType).map(function (key) { return SourceType[key]; });
    var Plugin = /** @class */ (function () {
        function Plugin() {
        }
        Plugin.addCustomerSource = function (opts) {
            return execP('addCustomerSource', opts);
        };
        Plugin.cancelApplePay = function () {
            return execP('cancelApplePay');
        };
        Plugin.confirmPaymentIntent = function (opts) {
            return execP('confirmPaymentIntent', opts);
        };
        Plugin.confirmSetupIntent = function (opts) {
            return execP('confirmSetupIntent', opts);
        };
        Plugin.createAccountToken = function (account) {
            return execP('createAccountToken', account);
        };
        Plugin.createBankAccountToken = function (bankAccount) {
            return execP('createBankAccountToken', bankAccount);
        };
        Plugin.validateCard = function (card) {
            return execP('validateCard', card);
        };
        Plugin.createCardToken = function (card) {
            return execP('createCardToken', card);
        };
        Plugin.createPiiToken = function (opts) {
            return execP('createPiiToken', opts);
        };
        Plugin.createSourceToken = function (opts) {
            return execP('createSourceToken', opts);
        };
        Plugin.customerPaymentMethods = function () {
            return execP('customerPaymentMethods');
        };
        Plugin.customizePaymentAuthUI = function (opts) {
            return execP('', opts);
        };
        Plugin.deleteCustomerSource = function (opts) {
            return execP('', opts);
        };
        Plugin.echo = function (options) {
            return execP('echo');
        };
        Plugin.finalizeApplePayTransaction = function (opts) {
            return execP('', opts);
        };
        Plugin.identifyCardBrand = function (opts) {
            return execP('identifyCardBrand', opts);
        };
        Plugin.initCustomerSession = function (opts) {
            return execP('initCustomerSession', opts);
        };
        Plugin.isApplePayAvailable = function () {
            return execP('isApplePayAvailable');
        };
        Plugin.isGooglePayAvailable = function () {
            return execP('isGooglePayAvailable');
        };
        Plugin.payWithApplePay = function (options) {
            return execP('payWithApplePay');
        };
        Plugin.setCustomerDefaultSource = function (opts) {
            return execP('setCustomerDefaultSource', opts);
        };
        Plugin.setPublishableKey = function (opts) {
            return execP('setPublishableKey', opts);
        };
        Plugin.startGooglePayTransaction = function () {
            return execP('startGooglePayTransaction');
        };
        Plugin.validateCVC = function (opts) {
            return execP('validateCVC', opts);
        };
        Plugin.validateCardNumber = function (opts) {
            return execP('validateCardNumber', opts);
        };
        Plugin.validateExpiryDate = function (opts) {
            return execP('validateExpiryDate', opts);
        };
        return Plugin;
    }());
    CordovaStripe.Plugin = Plugin;
})(CordovaStripe = exports.CordovaStripe || (exports.CordovaStripe = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29yZG92YVN0cmlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvcmRvdmFTdHJpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBK0I7QUFHL0IsSUFBTSxLQUFLLEdBQUcsVUFBaUIsVUFBa0IsRUFBRSxJQUFXO0lBQzVELE9BQU8sSUFBSSxPQUFPLENBQVcsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUMzQyxjQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLElBQU0sSUFBSSxHQUFRO0FBQ2xCLENBQUMsQ0FBQztBQWNGLElBQWlCLGFBQWEsQ0F5bEI3QjtBQXpsQkQsV0FBaUIsYUFBYTtJQWlGNUIsSUFBWSxZQU9YO0lBUEQsV0FBWSxZQUFZO1FBQ3RCLGlDQUFpQixDQUFBO1FBQ2pCLHFDQUFxQixDQUFBO1FBQ3JCLDZCQUFhLENBQUE7UUFDYixpQ0FBaUIsQ0FBQTtRQUNqQixpQ0FBaUIsQ0FBQTtRQUNqQixpQ0FBaUIsQ0FBQTtJQUNuQixDQUFDLEVBUFcsWUFBWSxHQUFaLDBCQUFZLEtBQVosMEJBQVksUUFPdkI7SUEyTkQsSUFBWSxVQVVYO0lBVkQsV0FBWSxVQUFVO1FBQ3BCLG9DQUFzQixDQUFBO1FBQ3RCLGlDQUFtQixDQUFBO1FBQ25CLDZCQUFlLENBQUE7UUFDZixxQ0FBdUIsQ0FBQTtRQUN2QiwrQkFBaUIsQ0FBQTtRQUNqQiwrQkFBaUIsQ0FBQTtRQUNqQiwrQ0FBaUMsQ0FBQTtRQUNqQyx5QkFBVyxDQUFBO1FBQ1gsMkNBQTZCLENBQUE7SUFDL0IsQ0FBQyxFQVZXLFVBQVUsR0FBVix3QkFBVSxLQUFWLHdCQUFVLFFBVXJCO0lBRUQsSUFBWSxTQVNYO0lBVEQsV0FBWSxTQUFTO1FBQ25CLGtEQUFxQyxDQUFBO1FBQ3JDLGtDQUFxQixDQUFBO1FB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QUF0QixVQUF1QixPQUFzQztZQUMzRCxPQUFPLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFFTSwrQkFBd0IsR0FBL0IsVUFBZ0MsSUFBeUM7WUFDdkUsT0FBTyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUVNLHdCQUFpQixHQUF4QixVQUF5QixJQUE0QztZQUNuRSxPQUFPLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBRU0sZ0NBQXlCLEdBQWhDO1lBQ0UsT0FBTyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBRU0sa0JBQVcsR0FBbEIsVUFBbUIsSUFBc0M7WUFDdkQsT0FBTyxLQUFLLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFFTSx5QkFBa0IsR0FBekIsVUFBMEIsSUFBNkM7WUFDckUsT0FBTyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUVNLHlCQUFrQixHQUF6QixVQUEwQixJQUE2QztZQUNyRSxPQUFPLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBMkhILGFBQUM7SUFBRCxDQUFDLEFBOU5ELElBOE5DO0lBOU5ZLG9CQUFNLFNBOE5sQixDQUFBO0FBQ0gsQ0FBQyxFQXpsQmdCLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBeWxCN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleGVjIH0gZnJvbSAnY29yZG92YSc7XG5cblxuY29uc3QgZXhlY1AgPSA8T3B0cywgUmVzcG9uc2U+KG1ldGhvZE5hbWU6IHN0cmluZywgb3B0cz86IE9wdHMpOiBQcm9taXNlPFJlc3BvbnNlPiA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTxSZXNwb25zZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGV4ZWMocmVzb2x2ZSwgcmVqZWN0LCAnQ29yZG92YVN0cmlwZScsIG1ldGhvZE5hbWUsIFtvcHRzXSk7XG4gIH0pO1xufTtcblxuY29uc3QgTk9PUDogYW55ID0gKCkgPT4ge1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3cge1xuICBjb3Jkb3ZhOiBDb3Jkb3ZhO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvcmRvdmEge1xuICBwbHVnaW5zOiBDb3Jkb3ZhUGx1Z2lucztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb3Jkb3ZhUGx1Z2lucyB7XG4gIHN0cmlwZTogdHlwZW9mIENvcmRvdmFTdHJpcGUuUGx1Z2luO1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIENvcmRvdmFTdHJpcGUge1xuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29tbW9uSW50ZW50T3B0aW9ucyB7XG4gICAgY2xpZW50U2VjcmV0OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSWYgcHJvdmlkZWQsIHRoZSBwYXltZW50IGludGVudCB3aWxsIGJlIGNvbmZpcm1lZCB1c2luZyB0aGlzIGNhcmQgYXMgYSBwYXltZW50IG1ldGhvZC5cbiAgICAgKi9cbiAgICBjYXJkPzogQ2FyZDtcbiAgICAvKipcbiAgICAgKiBJZiBwcm92aWRlZCwgdGhlIHBheW1lbnQgaW50ZW50IHdpbGwgYmUgY29uZmlybWVkIHVzaW5nIHRoaXMgcGF5bWVudCBtZXRob2RcbiAgICAgKi9cbiAgICBwYXltZW50TWV0aG9kSWQ/OiBzdHJpbmc7XG4gICAgcmVkaXJlY3RVcmw6IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCB0eXBlIENvbmZpcm1TZXR1cEludGVudE9wdGlvbnMgPSBDb21tb25JbnRlbnRPcHRpb25zO1xuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybVBheW1lbnRJbnRlbnRPcHRpb25zIGV4dGVuZHMgQ29tbW9uSW50ZW50T3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB5b3UgaW50ZW5kIHRvIHNhdmUgdGhlIHBheW1lbnQgbWV0aG9kIHRvIHRoZSBjdXN0b21lcidzIGFjY291bnQgYWZ0ZXIgdGhpcyBwYXltZW50XG4gICAgICovXG4gICAgc2F2ZU1ldGhvZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSWYgcHJvdmlkZWQsIHRoZSBwYXltZW50IGludGVudCB3aWxsIGJlIGNvbmZpcm1lZCB1c2luZyBhIGNhcmQgcHJvdmlkZWQgYnkgQXBwbGUgUGF5XG4gICAgICovXG4gICAgYXBwbGVQYXlPcHRpb25zPzogQXBwbGVQYXlPcHRpb25zO1xuXG4gICAgLyoqXG4gICAgICogSWYgcHJvdmlkZWQsIHRoZSBwYXltZW50IGludGVudCB3aWxsIGJlIGNvbmZpcm1lZCB1c2luZyBhIGNhcmQgcHJvdmlkZWQgYnkgR29vZ2xlIFBheVxuICAgICAqL1xuICAgIGdvb2dsZVBheU9wdGlvbnM/OiBHb29nbGVQYXlPcHRpb25zO1xuICB9XG5cbiAgZXhwb3J0IHR5cGUgU2V0UHVibGlzaGFibGVLZXlPcHRpb25zID0ge1xuICAgIGtleTogc3RyaW5nXG4gIH07XG5cbiAgZXhwb3J0IHR5cGUgVmFsaWRhdGVDYXJkTnVtYmVyT3B0aW9ucyA9IHtcbiAgICBudW1iZXI6IHN0cmluZ1xuICB9O1xuXG4gIGV4cG9ydCB0eXBlIFZhbGlkYXRlRXhwaXJ5RGF0ZU9wdGlvbnMgPSB7XG4gICAgZXhwX21vbnRoOiBudW1iZXIsXG4gICAgZXhwX3llYXI6IG51bWJlclxuICB9O1xuXG4gIGV4cG9ydCB0eXBlIFZhbGlkYXRlQ1ZDT3B0aW9ucyA9IHtcbiAgICBjdmM6IHN0cmluZ1xuICB9O1xuXG4gIGV4cG9ydCB0eXBlIElkZW50aWZ5Q2FyZEJyYW5kT3B0aW9ucyA9IHtcbiAgICBudW1iZXI6IHN0cmluZ1xuICB9O1xuXG4gIGV4cG9ydCB0eXBlIENyZWF0ZVBpaVRva2VuT3B0aW9ucyA9IHtcbiAgICBwaWk6IHN0cmluZ1xuICB9O1xuXG4gIGV4cG9ydCB0eXBlIENyZWF0ZVNvdXJjZVRva2VuT3B0aW9ucyA9IHtcbiAgICB0eXBlOiBTb3VyY2VUeXBlLFxuICAgIHBhcmFtczogU291cmNlUGFyYW1zXG4gIH07XG5cbiAgZXhwb3J0IHR5cGUgRmluYWxpemVBcHBsZVBheVRyYW5zYWN0aW9uT3B0aW9ucyA9IHtcbiAgICBzdWNjZXNzOiBib29sZWFuXG4gIH07XG5cbiAgZXhwb3J0IHR5cGUgVmFsaWRpdHlSZXNwb25zZSA9IHsgdmFsaWQ6IGJvb2xlYW4gfVxuICBleHBvcnQgdHlwZSBBdmFpbGFiaWxpdHlSZXNwb25zZSA9IHsgYXZhaWxhYmxlOiBib29sZWFuIH1cblxuICBleHBvcnQgdHlwZSBDYXJkQnJhbmRSZXNwb25zZSA9IHsgYnJhbmQ6IENhcmRCcmFuZCB9O1xuXG4gIGV4cG9ydCBpbnRlcmZhY2UgUGF5bWVudE1ldGhvZCB7XG4gICAgY3JlYXRlZD86IG51bWJlcjtcbiAgICBjdXN0b21lcklkPzogc3RyaW5nO1xuICAgIGlkPzogc3RyaW5nO1xuICAgIGxpdmVtb2RlOiBib29sZWFuO1xuICAgIHR5cGU/OiBzdHJpbmc7XG4gICAgY2FyZD86IENhcmQ7XG4gIH1cblxuICBleHBvcnQgZW51bSBVSUJ1dHRvblR5cGUge1xuICAgIFNVQk1JVCA9ICdzdWJtaXQnLFxuICAgIENPTlRJTlVFID0gJ2NvbnRpbnVlJyxcbiAgICBORVhUID0gJ25leHQnLFxuICAgIENBTkNFTCA9ICdjYW5jZWwnLFxuICAgIFJFU0VORCA9ICdyZXNlbmQnLFxuICAgIFNFTEVDVCA9ICdzZWxlY3QnXG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFVJQnV0dG9uQ3VzdG9taXphdGlvbk9wdGlvbnMge1xuICAgIHR5cGU6IFVJQnV0dG9uVHlwZTtcbiAgICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG4gICAgdGV4dENvbG9yPzogc3RyaW5nO1xuICAgIGZvbnROYW1lPzogc3RyaW5nO1xuICAgIGNvcm5lclJhZGl1cz86IG51bWJlcjtcbiAgICBmb250U2l6ZT86IG51bWJlcjtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgVUlDdXN0b21pemF0aW9uT3B0aW9ucyB7XG4gICAgYWNjZW50Q29sb3I/OiBzdHJpbmc7XG4gICAgYnV0dG9uQ3VzdG9taXphdGlvbnM/OiBVSUJ1dHRvbkN1c3RvbWl6YXRpb25PcHRpb25zW107XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEJhbmtBY2NvdW50IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG9iamVjdDogc3RyaW5nO1xuICAgIGFjY291bnRfaG9sZGVyX25hbWU6IHN0cmluZztcbiAgICBhY2NvdW50X2hvbGRlcl90eXBlOiBzdHJpbmc7XG4gICAgYmFua19uYW1lOiBzdHJpbmc7XG4gICAgY291bnRyeTogc3RyaW5nO1xuICAgIGN1cnJlbmN5OiBzdHJpbmc7XG4gICAgZmluZ2VycHJpbnQ6IHN0cmluZztcbiAgICBsYXN0NDogc3RyaW5nO1xuICAgIHJvdXRpbmdfbnVtYmVyOiBzdHJpbmc7XG4gICAgc3RhdHVzOiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIENhcmQge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgb2JqZWN0OiBzdHJpbmc7XG4gICAgYWRkcmVzc19jaXR5OiBhbnk7XG4gICAgYWRkcmVzc19jb3VudHJ5OiBhbnk7XG4gICAgYWRkcmVzc19saW5lMTogYW55O1xuICAgIGFkZHJlc3NfbGluZTFfY2hlY2s6IGFueTtcbiAgICBhZGRyZXNzX2xpbmUyOiBhbnk7XG4gICAgYWRkcmVzc19zdGF0ZTogYW55O1xuICAgIGFkZHJlc3NfemlwOiBhbnk7XG4gICAgYWRkcmVzc196aXBfY2hlY2s6IGFueTtcbiAgICBicmFuZDogQ2FyZEJyYW5kO1xuICAgIGNvdW50cnk6IHN0cmluZztcbiAgICBjdmNfY2hlY2s6IGFueTtcbiAgICBkeW5hbWljX2xhc3Q0OiBhbnk7XG4gICAgZXhwX21vbnRoOiBudW1iZXI7XG4gICAgZXhwX3llYXI6IG51bWJlcjtcbiAgICBmaW5nZXJwcmludDogc3RyaW5nO1xuICAgIGZ1bmRpbmc6IHN0cmluZztcbiAgICBsYXN0NDogc3RyaW5nO1xuICAgIG1ldGFkYXRhOiBhbnk7XG4gICAgbmFtZTogYW55O1xuICAgIHRva2VuaXphdGlvbl9tZXRob2Q6IGFueTtcbiAgICBwaG9uZTogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEJhbmtBY2NvdW50VG9rZW5SZXF1ZXN0IHtcbiAgICBjb3VudHJ5OiBzdHJpbmc7XG4gICAgY3VycmVuY3k6IHN0cmluZztcbiAgICBhY2NvdW50X2hvbGRlcl9uYW1lOiBzdHJpbmc7XG4gICAgYWNjb3VudF9ob2xkZXJfdHlwZTogc3RyaW5nO1xuICAgIHJvdXRpbmdfbnVtYmVyOiBzdHJpbmc7XG4gICAgYWNjb3VudF9udW1iZXI6IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQmFua0FjY291bnRUb2tlblJlc3BvbnNlIGV4dGVuZHMgVG9rZW5SZXNwb25zZSB7XG4gICAgYmFua19hY2NvdW50OiBCYW5rQWNjb3VudDtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2FyZFRva2VuUmVxdWVzdCB7XG4gICAgbnVtYmVyOiBzdHJpbmc7XG4gICAgZXhwX21vbnRoOiBudW1iZXI7XG4gICAgZXhwX3llYXI6IG51bWJlcjtcbiAgICBjdmM6IHN0cmluZztcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIGFkZHJlc3NfbGluZTE/OiBzdHJpbmc7XG4gICAgYWRkcmVzc19saW5lMj86IHN0cmluZztcbiAgICBhZGRyZXNzX2NpdHk/OiBzdHJpbmc7XG4gICAgYWRkcmVzc19zdGF0ZT86IHN0cmluZztcbiAgICBhZGRyZXNzX2NvdW50cnk/OiBzdHJpbmc7XG4gICAgYWRkcmVzc196aXA/OiBzdHJpbmc7XG4gICAgY3VycmVuY3k/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogaU9TIG9ubHlcbiAgICAgKi9cbiAgICBwaG9uZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBpT1Mgb25seVxuICAgICAqL1xuICAgIGVtYWlsPzogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBDYXJkVG9rZW5SZXNwb25zZSBleHRlbmRzIFRva2VuUmVzcG9uc2Uge1xuICAgIGNhcmQ6IENhcmQ7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFRva2VuUmVzcG9uc2Uge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIGNyZWF0ZWQ6IERhdGU7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEFwcGxlUGF5SXRlbSB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBhbW91bnQ6IG51bWJlciB8IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXBwbGVQYXlPcHRpb25zIHtcbiAgICBtZXJjaGFudElkOiBzdHJpbmc7XG4gICAgY291bnRyeTogc3RyaW5nO1xuICAgIGN1cnJlbmN5OiBzdHJpbmc7XG4gICAgaXRlbXM6IEFwcGxlUGF5SXRlbVtdO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBHb29nbGVQYXlPcHRpb25zIHtcbiAgICBhbGxvd2VkQ2FyZE5ldHdvcmtzOiBDYXJkQnJhbmRbXTtcbiAgICBhbGxvd2VkQXV0aE1ldGhvZHM6IEFycmF5PCdQQU5fT05MWScgfCAnQ1JZUFRPR1JBTV8zRFMnPjtcbiAgICB0b3RhbFByaWNlOiBzdHJpbmc7XG4gICAgdG90YWxQcmljZVN0YXR1czogJ2ZpbmFsJztcbiAgICBjdXJyZW5jeUNvZGU6IHN0cmluZztcbiAgICBtZXJjaGFudE5hbWU6IHN0cmluZztcbiAgICBlbWFpbFJlcXVpcmVkPzogYm9vbGVhbjtcbiAgICBhbGxvd1ByZXBhaWRDYXJkcz86IGJvb2xlYW47XG4gICAgYmlsbGluZ0FkZHJlc3NSZXF1aXJlZD86IGJvb2xlYW47XG4gICAgYmlsbGluZ0FkZHJlc3NQYXJhbXM/OiB7XG4gICAgICBmb3JtYXQ/OiAnTUlOJzsgLy8gVE9ETyBjb3B5IGZyb20gZ29vZ2xlXG4gICAgICBwaG9uZU51bWJlclJlcXVpcmVkPzogYm9vbGVhbjtcbiAgICB9XG4gICAgc2hpcHBpbmdBZGRyZXNzUmVxdWlyZWQ/OiBib29sZWFuO1xuICAgIHNoaXBwaW5nQWRkcmVzc1BhcmFtZXRlcnM/OiB7XG4gICAgICAvLyBUT0RPIGNvcHkgZm9ybSBnb29nbGVcbiAgICB9O1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBUaHJlZURlZVNlY3VyZVBhcmFtcyB7XG4gICAgLyoqXG4gICAgICogQW1vdW50XG4gICAgICovXG4gICAgYW1vdW50OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQ3VycmVuY3kgY29kZVxuICAgICAqL1xuICAgIGN1cnJlbmN5OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVVJMIHRvIHJlZGlyZWN0IHRvIGFmdGVyIHN1Y2Nlc3NmdWxseSB2ZXJpZnlpbmcgdGhlIGNhcmRcbiAgICAgKi9cbiAgICByZXR1cm5VUkw6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBDYXJkIHNvdXJjZSBJRFxuICAgICAqL1xuICAgIGNhcmQ6IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgR2lyb1BheVBhcmFtcyB7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHJldHVyblVSTDogc3RyaW5nO1xuICAgIHN0YXRlbWVudERlc2NyaXB0b3I6IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgaURFQUxQYXJhbXMge1xuICAgIGFtb3VudDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICByZXR1cm5VUkw6IHN0cmluZztcbiAgICBzdGF0ZW1lbnREZXNjcmlwdG9yOiBzdHJpbmc7XG4gICAgYmFuazogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBTRVBBRGViaXRQYXJhbXMge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBpYmFuOiBzdHJpbmc7XG4gICAgYWRkcmVzc0xpbmUxOiBzdHJpbmc7XG4gICAgY2l0eTogc3RyaW5nO1xuICAgIHBvc3RhbENvZGU6IHN0cmluZztcbiAgICBjb3VudHJ5OiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFNvZm9ydFBhcmFtcyB7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gICAgcmV0dXJuVVJMOiBzdHJpbmc7XG4gICAgY291bnRyeTogc3RyaW5nO1xuICAgIHN0YXRlbWVudERlc2NyaXB0b3I6IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQWxpcGF5UGFyYW1zIHtcbiAgICBhbW91bnQ6IG51bWJlcjtcbiAgICBjdXJyZW5jeTogc3RyaW5nO1xuICAgIHJldHVyblVSTDogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBBbGlwYXlSZXVzYWJsZVBhcmFtcyB7XG4gICAgY3VycmVuY3k6IHN0cmluZztcbiAgICByZXR1cm5VUkw6IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgUDI0UGFyYW1zIHtcbiAgICBhbW91bnQ6IG51bWJlcjtcbiAgICBjdXJyZW5jeTogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHJldHVyblVSTDogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBWaXNhQ2hlY2tvdXRQYXJhbXMge1xuICAgIGNhbGxJZDogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IHR5cGUgU291cmNlUGFyYW1zID1cbiAgICBUaHJlZURlZVNlY3VyZVBhcmFtc1xuICAgIHwgR2lyb1BheVBhcmFtc1xuICAgIHwgaURFQUxQYXJhbXNcbiAgICB8IFNFUEFEZWJpdFBhcmFtc1xuICAgIHwgU29mb3J0UGFyYW1zXG4gICAgfCBBbGlwYXlQYXJhbXNcbiAgICB8IEFsaXBheVJldXNhYmxlUGFyYW1zXG4gICAgfCBQMjRQYXJhbXNcbiAgICB8IFZpc2FDaGVja291dFBhcmFtcztcblxuICBleHBvcnQgZW51bSBTb3VyY2VUeXBlIHtcbiAgICBUaHJlZURlZVNlY3VyZSA9ICczZHMnLFxuICAgIEdpcm9QYXkgPSAnZ2lyb3BheScsXG4gICAgaURFQUwgPSAnaWRlYWwnLFxuICAgIFNFUEFEZWJpdCA9ICdzZXBhZGViaXQnLFxuICAgIFNvZm9ydCA9ICdzb2ZvcnQnLFxuICAgIEFsaVBheSA9ICdhbGlwYXknLFxuICAgIEFsaVBheVJldXNhYmxlID0gJ2FsaXBheXJldXNhYmxlJyxcbiAgICBQMjQgPSAncDI0JyxcbiAgICBWaXNhQ2hlY2tvdXQgPSAndmlzYWNoZWNrb3V0JyxcbiAgfVxuXG4gIGV4cG9ydCBlbnVtIENhcmRCcmFuZCB7XG4gICAgQU1FUklDQU5fRVhQUkVTUyA9ICdBTUVSSUNBTl9FWFBSRVNTJyxcbiAgICBESVNDT1ZFUiA9ICdESVNDT1ZFUicsXG4gICAgSkNCID0gJ0pDQicsXG4gICAgRElORVJTX0NMVUIgPSAnRElORVJTX0NMVUInLFxuICAgIFZJU0EgPSAnVklTQScsXG4gICAgTUFTVEVSQ0FSRCA9ICdNQVNURVJDQVJEJyxcbiAgICBVTklPTlBBWSA9ICdVTklPTlBBWScsXG4gICAgVU5LTk9XTiA9ICdVTktOT1dOJ1xuICB9XG5cbiAgY29uc3QgU291cmNlVHlwZUFycmF5OiBTb3VyY2VUeXBlW10gPSBPYmplY3Qua2V5cyhTb3VyY2VUeXBlKS5tYXAoKGtleTogYW55KSA9PiBTb3VyY2VUeXBlW2tleV0gYXMgYW55IGFzIFNvdXJjZVR5cGUpO1xuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQWRkcmVzcyB7XG4gICAgbGluZTE6IHN0cmluZztcbiAgICBsaW5lMjogc3RyaW5nO1xuICAgIGNpdHk6IHN0cmluZztcbiAgICBwb3N0YWxfY29kZTogc3RyaW5nO1xuICAgIHN0YXRlOiBzdHJpbmc7XG4gICAgY291bnRyeTogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBMZWdhbEVudGl0eSB7XG4gICAgYWRkcmVzcz86IEFkZHJlc3M7XG4gICAgZG9iPzoge1xuICAgICAgZGF5OiBudW1iZXI7XG4gICAgICBtb250aDogbnVtYmVyO1xuICAgICAgeWVhcjogbnVtYmVyO1xuICAgIH0sXG4gICAgZmlyc3RfbmFtZT86IHN0cmluZztcbiAgICBsYXN0X25hbWU/OiBzdHJpbmc7XG4gICAgZ2VuZGVyPzogJ21hbGUnIHwgJ2ZlbWFsZSc7XG4gICAgcGVyc29uYWxfYWRkcmVzcz86IEFkZHJlc3M7XG4gICAgYnVzaW5lc3NfbmFtZT86IHN0cmluZztcbiAgICBidXNpbmVzc191cmw/OiBzdHJpbmc7XG4gICAgYnVzaW5lc3NfdGF4X2lkX3Byb3ZpZGVkPzogYm9vbGVhbjtcbiAgICBidXNpbmVzc192YXRfaWRfcHJvdmlkZWQ/OiBzdHJpbmc7XG4gICAgY291bnRyeT86IHN0cmluZztcbiAgICB0b3NfYWNjZXB0YW5jZT86IHtcbiAgICAgIGRhdGU6IG51bWJlcjtcbiAgICAgIGlwOiBzdHJpbmc7XG4gICAgfSxcbiAgICBwZXJzb25hbF9pZF9udW1iZXJfcHJvdmlkZWQ/OiBib29sZWFuO1xuICAgIHBob25lX251bWJlcj86IHN0cmluZztcbiAgICBzc25fbGFzdF80X3Byb3ZpZGVkPzogYm9vbGVhbjtcbiAgICB0YXhfaWRfcmVnaXN0cmFyPzogc3RyaW5nO1xuICAgIHR5cGU/OiAnaW5kaXZpZHVhbCcgfCAnY29tcGFueSc7XG4gICAgdmVyaWZpY2F0aW9uPzogYW55O1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBBY2NvdW50UGFyYW1zIHtcbiAgICB0b3NTaG93bkFuZEFjY2VwdGVkOiBib29sZWFuO1xuICAgIGxlZ2FsRW50aXR5OiBMZWdhbEVudGl0eTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgRXJyb3Ige1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBQbHVnaW4ge1xuICAgIHN0YXRpYyBhZGRDdXN0b21lclNvdXJjZShvcHRzOiB7IHNvdXJjZUlkOiBzdHJpbmc7IHR5cGU/OiBzdHJpbmcgfSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgcmV0dXJuIGV4ZWNQKCdhZGRDdXN0b21lclNvdXJjZScsIG9wdHMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjYW5jZWxBcHBsZVBheSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIHJldHVybiBleGVjUCgnY2FuY2VsQXBwbGVQYXknKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29uZmlybVBheW1lbnRJbnRlbnQob3B0czogQ29yZG92YVN0cmlwZS5Db25maXJtUGF5bWVudEludGVudE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIHJldHVybiBleGVjUCgnY29uZmlybVBheW1lbnRJbnRlbnQnLCBvcHRzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29uZmlybVNldHVwSW50ZW50KG9wdHM6IENvcmRvdmFTdHJpcGUuQ29tbW9uSW50ZW50T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgcmV0dXJuIGV4ZWNQKCdjb25maXJtU2V0dXBJbnRlbnQnLCBvcHRzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQWNjb3VudFRva2VuKGFjY291bnQ6IENvcmRvdmFTdHJpcGUuQWNjb3VudFBhcmFtcyk6IFByb21pc2U8Q29yZG92YVN0cmlwZS5Ub2tlblJlc3BvbnNlPiB7XG4gICAgICByZXR1cm4gZXhlY1AoJ2NyZWF0ZUFjY291bnRUb2tlbicsIGFjY291bnQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVCYW5rQWNjb3VudFRva2VuKGJhbmtBY2NvdW50OiBDb3Jkb3ZhU3RyaXBlLkJhbmtBY2NvdW50VG9rZW5SZXF1ZXN0KTogUHJvbWlzZTxDb3Jkb3ZhU3RyaXBlLkJhbmtBY2NvdW50VG9rZW5SZXNwb25zZT4ge1xuICAgICAgcmV0dXJuIGV4ZWNQKCdjcmVhdGVCYW5rQWNjb3VudFRva2VuJywgYmFua0FjY291bnQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVDYXJkVG9rZW4oY2FyZDogQ29yZG92YVN0cmlwZS5DYXJkVG9rZW5SZXF1ZXN0KTogUHJvbWlzZTxDb3Jkb3ZhU3RyaXBlLkNhcmRUb2tlblJlc3BvbnNlPiB7XG4gICAgICByZXR1cm4gZXhlY1AoJ2NyZWF0ZUNhcmRUb2tlbicsIGNhcmQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVQaWlUb2tlbihvcHRzOiBDb3Jkb3ZhU3RyaXBlLkNyZWF0ZVBpaVRva2VuT3B0aW9ucyk6IFByb21pc2U8Q29yZG92YVN0cmlwZS5Ub2tlblJlc3BvbnNlPiB7XG4gICAgICByZXR1cm4gZXhlY1AoJ2NyZWF0ZVBpaVRva2VuJywgb3B0cyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVNvdXJjZVRva2VuKG9wdHM6IENvcmRvdmFTdHJpcGUuQ3JlYXRlU291cmNlVG9rZW5PcHRpb25zKTogUHJvbWlzZTxDb3Jkb3ZhU3RyaXBlLlRva2VuUmVzcG9uc2U+IHtcbiAgICAgIHJldHVybiBleGVjUCgnY3JlYXRlU291cmNlVG9rZW4nLCBvcHRzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3VzdG9tZXJQYXltZW50TWV0aG9kcygpOiBQcm9taXNlPHsgcGF5bWVudE1ldGhvZHM6IENvcmRvdmFTdHJpcGUuUGF5bWVudE1ldGhvZFtdIH0+IHtcbiAgICAgIHJldHVybiBleGVjUCgnY3VzdG9tZXJQYXltZW50TWV0aG9kcycpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjdXN0b21pemVQYXltZW50QXV0aFVJKG9wdHM6IGFueSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgcmV0dXJuIGV4ZWNQKCcnLCBvcHRzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVsZXRlQ3VzdG9tZXJTb3VyY2Uob3B0czogeyBzb3VyY2VJZDogc3RyaW5nIH0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIHJldHVybiBleGVjUCgnJywgb3B0cyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGVjaG8ob3B0aW9uczogeyB2YWx1ZTogc3RyaW5nIH0pOiBQcm9taXNlPHsgdmFsdWU6IHN0cmluZyB9PiB7XG4gICAgICByZXR1cm4gZXhlY1AoJ2VjaG8nKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZmluYWxpemVBcHBsZVBheVRyYW5zYWN0aW9uKG9wdHM6IENvcmRvdmFTdHJpcGUuRmluYWxpemVBcHBsZVBheVRyYW5zYWN0aW9uT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgcmV0dXJuIGV4ZWNQKCcnLCBvcHRzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaWRlbnRpZnlDYXJkQnJhbmQob3B0czogQ29yZG92YVN0cmlwZS5JZGVudGlmeUNhcmRCcmFuZE9wdGlvbnMpOiBQcm9taXNlPENvcmRvdmFTdHJpcGUuQ2FyZEJyYW5kUmVzcG9uc2U+IHtcbiAgICAgIHJldHVybiBleGVjUCgnaWRlbnRpZnlDYXJkQnJhbmQnLCBvcHRzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5pdEN1c3RvbWVyU2Vzc2lvbihvcHRzOiB7IGlkOiBzdHJpbmc7IG9iamVjdDogJ2VwaGVtZXJhbF9rZXknOyBhc3NvY2lhdGVkX29iamVjdHM6IEFycmF5PHsgdHlwZTogJ2N1c3RvbWVyJzsgaWQ6IHN0cmluZyB9PjsgY3JlYXRlZDogbnVtYmVyOyBleHBpcmVzOiBudW1iZXI7IGxpdmVtb2RlOiBib29sZWFuOyBzZWNyZXQ6IHN0cmluZzsgYXBpVmVyc2lvbj86IHN0cmluZyB9KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICByZXR1cm4gZXhlY1AoJ2luaXRDdXN0b21lclNlc3Npb24nLCBvcHRzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNBcHBsZVBheUF2YWlsYWJsZSgpOiBQcm9taXNlPENvcmRvdmFTdHJpcGUuQXZhaWxhYmlsaXR5UmVzcG9uc2U+IHtcbiAgICAgIHJldHVybiBleGVjUCgnaXNBcHBsZVBheUF2YWlsYWJsZScpO1xuICAgIH1cblxuICAgIHN0YXRpYyAgaXNHb29nbGVQYXlBdmFpbGFibGUoKTogUHJvbWlzZTxDb3Jkb3ZhU3RyaXBlLkF2YWlsYWJpbGl0eVJlc3BvbnNlPiB7XG4gICAgICByZXR1cm4gZXhlY1AoJ2lzR29vZ2xlUGF5QXZhaWxhYmxlJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHBheVdpdGhBcHBsZVBheShvcHRpb25zOiBDb3Jkb3ZhU3RyaXBlLkFwcGxlUGF5T3B0aW9ucyk6IFByb21pc2U8Q29yZG92YVN0cmlwZS5Ub2tlblJlc3BvbnNlPiB7XG4gICAgICByZXR1cm4gZXhlY1AoJ3BheVdpdGhBcHBsZVBheScpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXRDdXN0b21lckRlZmF1bHRTb3VyY2Uob3B0czogeyBzb3VyY2VJZDogc3RyaW5nOyB0eXBlPzogc3RyaW5nIH0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIHJldHVybiBleGVjUCgnc2V0Q3VzdG9tZXJEZWZhdWx0U291cmNlJywgb3B0cyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldFB1Ymxpc2hhYmxlS2V5KG9wdHM6IENvcmRvdmFTdHJpcGUuU2V0UHVibGlzaGFibGVLZXlPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICByZXR1cm4gZXhlY1AoJ3NldFB1Ymxpc2hhYmxlS2V5Jywgb3B0cyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHN0YXJ0R29vZ2xlUGF5VHJhbnNhY3Rpb24oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICByZXR1cm4gZXhlY1AoJ3N0YXJ0R29vZ2xlUGF5VHJhbnNhY3Rpb24nKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdmFsaWRhdGVDVkMob3B0czogQ29yZG92YVN0cmlwZS5WYWxpZGF0ZUNWQ09wdGlvbnMpOiBQcm9taXNlPENvcmRvdmFTdHJpcGUuVmFsaWRpdHlSZXNwb25zZT4ge1xuICAgICAgcmV0dXJuIGV4ZWNQKCd2YWxpZGF0ZUNWQycsIG9wdHMpO1xuICAgIH1cblxuICAgIHN0YXRpYyB2YWxpZGF0ZUNhcmROdW1iZXIob3B0czogQ29yZG92YVN0cmlwZS5WYWxpZGF0ZUNhcmROdW1iZXJPcHRpb25zKTogUHJvbWlzZTxDb3Jkb3ZhU3RyaXBlLlZhbGlkaXR5UmVzcG9uc2U+IHtcbiAgICAgIHJldHVybiBleGVjUCgndmFsaWRhdGVDYXJkTnVtYmVyJywgb3B0cyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHZhbGlkYXRlRXhwaXJ5RGF0ZShvcHRzOiBDb3Jkb3ZhU3RyaXBlLlZhbGlkYXRlRXhwaXJ5RGF0ZU9wdGlvbnMpOiBQcm9taXNlPENvcmRvdmFTdHJpcGUuVmFsaWRpdHlSZXNwb25zZT4ge1xuICAgICAgcmV0dXJuIGV4ZWNQKCd2YWxpZGF0ZUV4cGlyeURhdGUnLCBvcHRzKTtcbiAgICB9XG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBTZXQgcHVibGlzaGFibGUga2V5XG4gICAgLy8gICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgIC8vICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1Y2Nlc3NcbiAgICAvLyAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcnJvclxuICAgIC8vICAqL1xuICAgIC8vIHN0YXRpYyBzZXRQdWJsaXNoYWJsZUtleShrZXk6IHN0cmluZywgc3VjY2VzczogQmxhbmtDYWxsYmFjayA9IE5PT1AsIGVycm9yOiBFcnJvckNhbGxiYWNrID0gTk9PUCkge1xuICAgIC8vICAgZXhlYyhzdWNjZXNzLCBlcnJvciwgJ0NvcmRvdmFTdHJpcGUnLCAnc2V0UHVibGlzaGFibGVLZXknLCBba2V5XSk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gLyoqXG4gICAgLy8gICogQ3JlYXRlIGEgY3JlZGl0IGNhcmQgdG9rZW5cbiAgICAvLyAgKiBAcGFyYW0ge0NvcmRvdmFTdHJpcGUuQ2FyZFRva2VuUmVxdWVzdH0gY3JlZGl0Q2FyZFxuICAgIC8vICAqIEBwYXJhbSB7Q29yZG92YVN0cmlwZS5DYXJkVG9rZW5DYWxsYmFja30gc3VjY2Vzc1xuICAgIC8vICAqIEBwYXJhbSB7Q29yZG92YVN0cmlwZS5FcnJvckNhbGxiYWNrfSBlcnJvclxuICAgIC8vICAqL1xuICAgIC8vIHN0YXRpYyBjcmVhdGVDYXJkVG9rZW4oY3JlZGl0Q2FyZDogQ2FyZFRva2VuUmVxdWVzdCwgc3VjY2VzczogQ2FyZFRva2VuQ2FsbGJhY2sgPSBOT09QLCBlcnJvcjogRXJyb3JDYWxsYmFjayA9IE5PT1ApIHtcbiAgICAvLyAgIGV4ZWMoc3VjY2VzcywgZXJyb3IsICdDb3Jkb3ZhU3RyaXBlJywgJ2NyZWF0ZUNhcmRUb2tlbicsIFtjcmVkaXRDYXJkXSk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gLyoqXG4gICAgLy8gICogQ3JlYXRlIGEgYmFuayBhY2NvdW50IHRva2VuXG4gICAgLy8gICogQHBhcmFtIHtDb3Jkb3ZhU3RyaXBlLkJhbmtBY2NvdW50VG9rZW5SZXF1ZXN0fSBiYW5rQWNjb3VudFxuICAgIC8vICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1Y2Nlc3NcbiAgICAvLyAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcnJvclxuICAgIC8vICAqL1xuICAgIC8vIHN0YXRpYyBjcmVhdGVCYW5rQWNjb3VudFRva2VuKGJhbmtBY2NvdW50OiBCYW5rQWNjb3VudFRva2VuUmVxdWVzdCwgc3VjY2VzczogQmFua0FjY291bnRUb2tlbkNhbGxiYWNrID0gTk9PUCwgZXJyb3I6IEVycm9yQ2FsbGJhY2sgPSBOT09QKSB7XG4gICAgLy8gICBleGVjKHN1Y2Nlc3MsIGVycm9yLCAnQ29yZG92YVN0cmlwZScsICdjcmVhdGVCYW5rQWNjb3VudFRva2VuJywgW2JhbmtBY2NvdW50XSk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gLyoqXG4gICAgLy8gICogVmFsaWRhdGVzIGNhcmQgbnVtYmVyXG4gICAgLy8gICogQHBhcmFtIGNhcmROdW1iZXIgQ2FyZCBudW1iZXJcbiAgICAvLyAgKiBAcGFyYW0geyhpc1ZhbGlkOiBib29sZWFuKSA9PiB2b2lkfSBbc3VjY2Vzc11cbiAgICAvLyAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZXJyb3JdXG4gICAgLy8gICovXG4gICAgLy8gc3RhdGljIHZhbGlkYXRlQ2FyZE51bWJlcihjYXJkTnVtYmVyLCBzdWNjZXNzOiAoaXNWYWxpZDogYm9vbGVhbikgPT4gdm9pZCA9IE5PT1AsIGVycm9yOiBFcnJvckNhbGxiYWNrID0gTk9PUCkge1xuICAgIC8vICAgZXhlYyhzdWNjZXNzLCBlcnJvciwgJ0NvcmRvdmFTdHJpcGUnLCAndmFsaWRhdGVDYXJkTnVtYmVyJywgW2NhcmROdW1iZXJdKTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyAvKipcbiAgICAvLyAgKiBWYWxpZGF0ZXMgdGhlIGV4cGlyeSBkYXRlIG9mIGEgY2FyZFxuICAgIC8vICAqIEBwYXJhbSB7bnVtYmVyfSBleHBNb250aFxuICAgIC8vICAqIEBwYXJhbSB7bnVtYmVyfSBleHBZZWFyXG4gICAgLy8gICogQHBhcmFtIHsoaXNWYWxpZDogYm9vbGVhbikgPT4gdm9pZH0gW3N1Y2Nlc3NdXG4gICAgLy8gICogQHBhcmFtIHtGdW5jdGlvbn0gW2Vycm9yXVxuICAgIC8vICAqL1xuICAgIC8vIHN0YXRpYyB2YWxpZGF0ZUV4cGlyeURhdGUoZXhwTW9udGg6IG51bWJlciwgZXhwWWVhcjogbnVtYmVyLCBzdWNjZXNzOiAoaXNWYWxpZDogYm9vbGVhbikgPT4gdm9pZCA9IE5PT1AsIGVycm9yOiBFcnJvckNhbGxiYWNrID0gTk9PUCkge1xuICAgIC8vICAgZXhlYyhzdWNjZXNzLCBlcnJvciwgJ0NvcmRvdmFTdHJpcGUnLCAndmFsaWRhdGVFeHBpcnlEYXRlJywgW2V4cE1vbnRoLCBleHBZZWFyXSk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gLyoqXG4gICAgLy8gICogVmFsaWRhdGVzIGEgQ1ZDIG9mIGEgY2FyZFxuICAgIC8vICAqIEBwYXJhbSB7c3RyaW5nfSBjdmNcbiAgICAvLyAgKiBAcGFyYW0geyhpc1ZhbGlkOiBib29sZWFuKSA9PiB2b2lkfSBbc3VjY2Vzc11cbiAgICAvLyAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZXJyb3JdXG4gICAgLy8gICovXG4gICAgLy8gc3RhdGljIHZhbGlkYXRlQ1ZDKGN2Yzogc3RyaW5nLCBzdWNjZXNzOiAoaXNWYWxpZDogYm9vbGVhbikgPT4gdm9pZCA9IE5PT1AsIGVycm9yOiBFcnJvckNhbGxiYWNrID0gTk9PUCkge1xuICAgIC8vICAgZXhlYyhzdWNjZXNzLCBlcnJvciwgJ0NvcmRvdmFTdHJpcGUnLCAndmFsaWRhdGVDVkMnLCBbY3ZjXSk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gLyoqXG4gICAgLy8gICogR2V0cyBhIGNhcmQgdHlwZSBmcm9tIGEgY2FyZCBudW1iZXJcbiAgICAvLyAgKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gY2FyZE51bWJlclxuICAgIC8vICAqIEBwYXJhbSB7KHR5cGU6IHN0cmluZykgPT4gdm9pZH0gW3N1Y2Nlc3NdXG4gICAgLy8gICogQHBhcmFtIHtGdW5jdGlvbn0gW2Vycm9yXVxuICAgIC8vICAqL1xuICAgIC8vIHN0YXRpYyBnZXRDYXJkVHlwZShjYXJkTnVtYmVyOiBzdHJpbmcgfCBudW1iZXIsIHN1Y2Nlc3M6ICh0eXBlOiBzdHJpbmcpID0+IHZvaWQgPSBOT09QLCBlcnJvcjogRXJyb3JDYWxsYmFjayA9IE5PT1ApIHtcbiAgICAvLyAgIGV4ZWMoc3VjY2VzcywgZXJyb3IsICdDb3Jkb3ZhU3RyaXBlJywgJ2dldENhcmRUeXBlJywgW1N0cmluZyhjYXJkTnVtYmVyKV0pO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIC8qKlxuICAgIC8vICAqIFBheSB3aXRoIEFwcGxlUGF5XG4gICAgLy8gICogQHBhcmFtIHtDb3Jkb3ZhU3RyaXBlLkFwcGxlUGF5T3B0aW9uc30gb3B0aW9uc1xuICAgIC8vICAqIEBwYXJhbSB7KHRva2VuOiBzdHJpbmcsIGNhbGxiYWNrOiAocGF5bWVudFByb2Nlc3NlZDogYm9vbGVhbikgPT4gdm9pZCkgPT4gdm9pZH0gc3VjY2Vzc1xuICAgIC8vICAqIEBwYXJhbSB7RnVuY3Rpb259IGVycm9yXG4gICAgLy8gICovXG4gICAgLy8gc3RhdGljIHBheVdpdGhBcHBsZVBheShvcHRpb25zOiBBcHBsZVBheU9wdGlvbnMsIHN1Y2Nlc3M6ICh0b2tlbjogVG9rZW5SZXNwb25zZSwgY2FsbGJhY2s6IChwYXltZW50UHJvY2Vzc2VkOiBib29sZWFuKSA9PiB2b2lkKSA9PiB2b2lkLCBlcnJvcjogRXJyb3JDYWxsYmFjayA9IE5PT1ApIHtcbiAgICAvLyAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5tZXJjaGFudElkIHx8ICFvcHRpb25zLmNvdW50cnkgfHwgIW9wdGlvbnMuY3VycmVuY3kgfHwgIW9wdGlvbnMuaXRlbXMgfHwgIW9wdGlvbnMuaXRlbXMubGVuZ3RoKSB7XG4gICAgLy8gICAgIGVycm9yKHtcbiAgICAvLyAgICAgICBtZXNzYWdlOiAnTWlzc2luZyBvbmUgb3IgbW9yZSBwYXltZW50IG9wdGlvbnMuJyxcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIHJldHVybjtcbiAgICAvLyAgIH1cbiAgICAvL1xuICAgIC8vICAgb3B0aW9ucy5pdGVtcyA9IG9wdGlvbnMuaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgIC8vICAgICBpdGVtLmFtb3VudCA9IFN0cmluZyhpdGVtLmFtb3VudCk7XG4gICAgLy8gICAgIHJldHVybiBpdGVtO1xuICAgIC8vICAgfSk7XG4gICAgLy9cbiAgICAvLyAgIGV4ZWMoKHRva2VuOiBUb2tlblJlc3BvbnNlKSA9PiB7XG4gICAgLy8gICAgIHN1Y2Nlc3ModG9rZW4sIChwYXltZW50UHJvY2Vzc2VkOiBib29sZWFuKSA9PiB7XG4gICAgLy8gICAgICAgZXhlYyhOT09QLCBOT09QLCAnQ29yZG92YVN0cmlwZScsICdmaW5hbGl6ZUFwcGxlUGF5VHJhbnNhY3Rpb24nLCBbQm9vbGVhbihwYXltZW50UHJvY2Vzc2VkKV0pO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyAgIH0sIGVycm9yLCAnQ29yZG92YVN0cmlwZScsICdpbml0aWFsaXplQXBwbGVQYXlUcmFuc2FjdGlvbicsIFtcbiAgICAvLyAgICAgb3B0aW9ucy5tZXJjaGFudElkLFxuICAgIC8vICAgICBvcHRpb25zLmNvdW50cnksXG4gICAgLy8gICAgIG9wdGlvbnMuY3VycmVuY3ksXG4gICAgLy8gICAgIG9wdGlvbnMuaXRlbXMsXG4gICAgLy8gICBdKTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBzdGF0aWMgaW5pdEdvb2dsZVBheShzdWNjZXNzID0gTk9PUCwgZXJyb3I6IEVycm9yQ2FsbGJhY2sgPSBOT09QKSB7XG4gICAgLy8gICBleGVjKHN1Y2Nlc3MsIGVycm9yLCAnQ29yZG92YVN0cmlwZScsICdpbml0R29vZ2xlUGF5Jyk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gc3RhdGljIHBheVdpdGhHb29nbGVQYXkob3B0aW9uczogR29vZ2xlUGF5T3B0aW9ucywgc3VjY2VzczogKHRva2VuOiBUb2tlblJlc3BvbnNlKSA9PiB2b2lkLCBlcnJvcjogRXJyb3JDYWxsYmFjayA9IE5PT1ApIHtcbiAgICAvLyAgIGV4ZWMoc3VjY2VzcywgZXJyb3IsICdDb3Jkb3ZhU3RyaXBlJywgJ3BheVdpdGhHb29nbGVQYXknLCBbb3B0aW9ucy5hbW91bnQsIG9wdGlvbnMuY3VycmVuY3lDb2RlXSk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gc3RhdGljIGNyZWF0ZVNvdXJjZSh0eXBlOiBTb3VyY2VUeXBlLCBwYXJhbXM6IFNvdXJjZVBhcmFtcywgc3VjY2VzczogKHRva2VuOiBUb2tlblJlc3BvbnNlKSA9PiB2b2lkID0gTk9PUCwgZXJyb3I6IEVycm9yQ2FsbGJhY2sgPSBOT09QKSB7XG4gICAgLy8gICBleGVjKHN1Y2Nlc3MsIGVycm9yLCAnQ29yZG92YVN0cmlwZScsICdjcmVhdGVTb3VyY2UnLCBbU291cmNlVHlwZUFycmF5LmluZGV4T2YodHlwZS50b0xvd2VyQ2FzZSgpIGFzIFNvdXJjZVR5cGUpLCBwYXJhbXNdKTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBzdGF0aWMgY3JlYXRlUGlpVG9rZW4ocGVyc29uYWxJZDogc3RyaW5nLCBzdWNjZXNzID0gTk9PUCwgZXJyb3I6IEVycm9yQ2FsbGJhY2sgPSBOT09QKSB7XG4gICAgLy8gICBleGVjKHN1Y2Nlc3MsIGVycm9yLCAnQ29yZG92YVN0cmlwZScsICdjcmVhdGVQaWlUb2tlbicsIFtwZXJzb25hbElkXSk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gc3RhdGljIGNyZWF0ZUFjY291bnRUb2tlbihhY2NvdW50UGFyYW1zOiBBY2NvdW50UGFyYW1zLCBzdWNjZXNzID0gTk9PUCwgZXJyb3I6IEVycm9yQ2FsbGJhY2sgPSBOT09QKSB7XG4gICAgLy8gICBleGVjKHN1Y2Nlc3MsIGVycm9yLCAnQ29yZG92YVN0cmlwZScsICdjcmVhdGVBY2NvdW50VG9rZW4nLCBbYWNjb3VudFBhcmFtc10pO1xuICAgIC8vIH1cbiAgfVxufVxuXG4iXX0=