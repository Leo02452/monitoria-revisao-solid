export default interface IPasswordCompareProvider {
  validate(password: string, hashPassword: string): Promise<boolean>
}
