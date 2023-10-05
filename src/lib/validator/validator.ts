export const RegexTypes = {
    NUMBER: 1 << 0,
    ALPHABET: 1 << 1,
    ALPHABET_ONLY: 1 << 16,
    NUMBER_ONLY: 1 << 17,
    EMAIL_ONLY: 1 << 18
}

export type RegexTypesFlag = number

//TODO インスタンスの使い回しを実装する
export class ValidateBuilder {
    public static MakeValidator() {

    }
}

export class Validator {
    public min: number | undefined;
    public max: number | undefined;
    public require: boolean | undefined;
    public regex: RegexTypesFlag | undefined;
    public hasError: boolean;
    public checkvalue: string;
    public errorMessage: string | undefined;

    constructor(checkvalue: string) {
        this.checkvalue = checkvalue
        this.hasError = false;
    }

    public SetValue(value: string) {
        this.checkvalue = value
    }

    public Reset() {
        this.min = undefined
        this.max = undefined
        this.require = undefined
        this.regex = undefined
        this.hasError = false
        this.errorMessage = undefined
    }

    public Require(message?: string): Validator {
        this.require = true;
        if (this.checkvalue == undefined) this.hasError = true;
        else {
            if (this.hasError) return this;
            if (typeof this.checkvalue !== 'string') this.hasError = true
            if (this.checkvalue === '') this.hasError = true
        }
        if (this.hasError) this.errorMessage = message
        return this
    }

    public LengthMin(min: number, message?: string): Validator {
        if (this.checkvalue == undefined)
            if (!this.require) return this
            else this.hasError = true
        else {
            if (this.hasError) return this;
            this.min = min
            if (this.min !== undefined)
                if (this.checkvalue.length <= this.min) this.hasError = true
        }
        if (this.hasError) this.errorMessage = message
        return this
    }

    public LengthMax(max: number, message?: string): Validator {
        if (this.checkvalue == undefined)
            if (!this.require) return this
            else this.hasError = true
        else {
            if (this.hasError) return this;
            this.max = max
            if (this.max !== undefined)
                if (this.checkvalue.length >= this.max) this.hasError = true
        }
        if (this.hasError) this.errorMessage = message
        return this
    }

    public Between(min: number, max: number, message?: string) {
        if (this.checkvalue == undefined)
            if (!this.require) return this
            else this.hasError = true
        else {
            if (this.hasError) return this;
            this.min = min
            this.max = max
            if (this.min !== undefined)
                if (this.checkvalue.length <= this.min) this.hasError = true
            if (this.max !== undefined)
                if (this.checkvalue.length > this.max) this.hasError = true
        }
        if (this.hasError) this.errorMessage = message
        return this
    }

    public Match(regexflag: RegexTypesFlag, message?: string): Validator {
        if (this.checkvalue == undefined)
            if (!this.require) return this
            else this.hasError = true
        else {
            if (this.hasError) return this;
            this.regex = regexflag
            if (this.regex !== undefined) {
                if (this.regex & RegexTypes.ALPHABET_ONLY) {
                    if (this.checkvalue.length != RegExp('[A-z]*').exec(this.checkvalue)?.[0].length)
                        this.hasError = true;
                } else if (this.regex & RegexTypes.NUMBER_ONLY) {
                    if (this.checkvalue.length != RegExp('[0-9]*').exec(this.checkvalue)?.[0].length)
                        this.hasError = true;
                } else if (this.regex & RegexTypes.EMAIL_ONLY) {
                    if (this.checkvalue.length != RegExp('[A-z0-9_.]+@[A-z_]+.[A-z_]+').exec(this.checkvalue)?.[0].length)
                        this.hasError = true;
                } else {
                    let validCounter = 0;
                    let matcharray: RegExpExecArray | null
                    if (this.regex & RegexTypes.ALPHABET) {
                        let regexp = /[A-z]+/g
                        while ((matcharray = regexp.exec(this.checkvalue)) !== null) {
                            validCounter += matcharray[0].length;
                        }
                    }
                    if (this.regex & RegexTypes.NUMBER) {
                        let regexp = /[0-9]+/g
                        while ((matcharray = regexp.exec(this.checkvalue)) !== null) {
                            validCounter += matcharray[0].length;
                        }
                    }
                    if (this.checkvalue.length !== validCounter) this.hasError = true;
                }
            }
        }
        if (this.hasError) this.errorMessage = message
        return this
    }
}