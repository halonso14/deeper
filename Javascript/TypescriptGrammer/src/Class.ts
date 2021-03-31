class ExampleClass {
  public publicMember: string;
  private privateMemeber: string;
  protected protectedMemeber: string;

  constructor(
    publicMember: string,
    privateMemeber: string,
    protectedMemeber: string
  ) {
    this.publicMember = publicMember;
    this.privateMemeber = privateMemeber;
    this.protectedMemeber = protectedMemeber;
  }

  public getPublicMemeberByPublicMethod(): string {
    return this.publicMember;
  }

  private getPublicMemeberByPrivateMethod(): string {
    return this.publicMember;
  }

  protected getPublicMemeberByProtectedMethod(): string {
    return this.publicMember;
  }

  public getPrivateMemeberByPublicMethod(): string {
    return this.privateMemeber;
  }

  private getPrivateMemeberByPrivateMethod(): string {
    return this.privateMemeber;
  }

  protected getPrivateMemeberByProtectedMethod(): string {
    return this.privateMemeber;
  }

  public getProtectedMemeberByPublicMethod(): string {
    return this.protectedMemeber;
  }

  private getProtectedMemeberByPrivateMethod(): string {
    return this.protectedMemeber;
  }

  protected getProtectedMemeberByProtectedMethod(): string {
    return this.protectedMemeber;
  }

  public get member(): any {
    return {
      publicMemeber: this.publicMember,
      privateMemeber: this.privateMemeber,
      protectedMemeber: this.protectedMemeber,
    };
  }

  callMember(): void {
    console.log('callMember() is called');
    console.log('this.publicMember', this.publicMember);
    console.log('this.privateMemeber', this.privateMemeber);
    console.log('this.protectedMemeber', this.protectedMemeber);
    console.log(
      '*** conclusion: protected members can be called within instance ***'
    );
  }

  test(): void {
    console.log('test() is called');
    console.log(
      'public method:',
      this.getPublicMemeberByPublicMethod(),
      this.getPublicMemeberByPrivateMethod(),
      this.getPublicMemeberByProtectedMethod()
    );
    console.log(
      'private method:',
      this.getPrivateMemeberByPublicMethod(),
      this.getPrivateMemeberByPrivateMethod(),
      this.getPrivateMemeberByProtectedMethod()
    );
    console.log(
      'protected method:',
      this.getProtectedMemeberByPublicMethod(),
      this.getProtectedMemeberByPrivateMethod(),
      this.getProtectedMemeberByProtectedMethod()
    );
    console.log(
      '*** conclusion: protected members can be called by any methods within instance ***'
    );
  }
}

class ExtendedExampleClass extends ExampleClass {
  constructor(
    public extendedPublicMember: string,
    private extendedPrivateMemeber: string,
    protected extendedProtectedMemeber: string
  ) {
    super('public1', 'private1', 'protected1');
  }

  callSuperMember(): void {
    console.log('callSuperMember() is called');
    // console.log('super.publicMember', super.publicMember);
    // console.log('super.privateMemeber', super.privateMemeber);
    // console.log('super.protectedMemeber', super.protectedMemeber);
    console.log(
      '*** conclusion: members from super can be called only by methods ***'
    );
  }

  testSuper(): void {
    console.log('testSuper() is called');
    console.log(
      'public method:',
      super.getPublicMemeberByPublicMethod(),
      super.getPublicMemeberByProtectedMethod()
    );
    console.log(
      'private method:',
      super.getPrivateMemeberByPublicMethod(),
      super.getPrivateMemeberByProtectedMethod()
    );
    console.log(
      'protected method:',
      super.getProtectedMemeberByPublicMethod(),
      super.getProtectedMemeberByProtectedMethod()
    );
    console.log(
      '*** conclusion: any members from super can be called by public/protected methods ***'
    );
  }
}

class OverridenExampleClass extends ExampleClass {
  constructor(public publicMember: string, protected protectedMemeber: string) {
    super('public1', 'private1', 'protected1');
  }

  testSuper(): void {
    console.log('testSuper() is called');
    console.log('super');
    console.log(
      'public method:',
      super.getPublicMemeberByPublicMethod(),
      super.getPublicMemeberByProtectedMethod()
    );
    console.log(
      'private method:',
      super.getPrivateMemeberByPublicMethod(),
      super.getPrivateMemeberByProtectedMethod()
    );
    console.log(
      'protected method:',
      super.getProtectedMemeberByPublicMethod(),
      super.getProtectedMemeberByProtectedMethod()
    );
    console.log(
      '*** duplicated conclusion: any members from super can be called by public/protected methods ***'
    );
  }
}

const exampleInstance = new ExampleClass('public1', 'private1', 'protected1');
console.log('exampleInstance');
console.log(exampleInstance);
exampleInstance.test();
console.log('call publicMemeber by instance');
console.log(exampleInstance.getPublicMemeberByPublicMethod());
// console.log(exampleInstance.getPublicMemeberByPrivateMethod());
// console.log(exampleInstance.getPublicMemeberByProtectedMethod());
console.log('call privateMemeber by instance');
console.log(exampleInstance.getPrivateMemeberByPublicMethod());
// console.log(exampleInstance.getPrivateMemeberByPrivateMethod());
// console.log(exampleInstance.getPrivateMemeberByProtectedMethod());
console.log('call protectedMemeber by instance');
console.log(exampleInstance.getProtectedMemeberByPublicMethod());
// console.log(exampleInstance.getProtectedMemeberByPrivateMethod());
// console.log(exampleInstance.getProtectedMemeberByProtectedMethod());
console.log('*** conclusion: any members can be called by public method ***');
console.log('exampleInstance end\n');
console.log('call member with getter method', exampleInstance.member);
console.log('call member with getter method', exampleInstance.callMember());

const extendedExampleInstance = new ExtendedExampleClass(
  'public2',
  'private2',
  'protected2'
);
console.log('extendedExampleInstance');
console.log(extendedExampleInstance);
extendedExampleInstance.test();
extendedExampleInstance.testSuper();
console.log('call publicMemeber by instance');
console.log(extendedExampleInstance.getPublicMemeberByPublicMethod());
// console.log(extendedExampleInstance.getPublicMemeberByPrivateMethod());
// console.log(extendedExampleInstance.getPublicMemeberByProtectedMethod());
console.log('call privateMemeber by instance');
console.log(extendedExampleInstance.getPrivateMemeberByPublicMethod());
// console.log(extendedExampleInstance.getPrivateMemeberByPrivateMethod());
// console.log(extendedExampleInstance.getPrivateMemeberByProtectedMethod());
console.log('call protectedMemeber by instance');
console.log(extendedExampleInstance.getProtectedMemeberByPublicMethod());
// console.log(extendedExampleInstance.getProtectedMemeberByPrivateMethod());
// console.log(extendedExampleInstance.getProtectedMemeberByProtectedMethod());
console.log('*** conclusion: any members can be called by public method ***');
console.log('extendedExampleInstance end\n');

const overridenExampleInstance = new OverridenExampleClass(
  'public2',
  'protected2'
);
console.log('overridenExampleInstance');
console.log(overridenExampleInstance);
overridenExampleInstance.test();
overridenExampleInstance.testSuper();
console.log('call publicMemeber by instance');
console.log(overridenExampleInstance.getPublicMemeberByPublicMethod());
// console.log(overridenExampleInstance.getPublicMemeberByPrivateMethod());
// console.log(overridenExampleInstance.getPublicMemeberByProtectedMethod());
console.log('call privateMemeber by instance');
console.log(overridenExampleInstance.getPrivateMemeberByPublicMethod());
// console.log(overridenExampleInstance.getPrivateMemeberByPrivateMethod());
// console.log(overridenExampleInstance.getPrivateMemeberByProtectedMethod());
console.log('call protectedMemeber by instance');
console.log(overridenExampleInstance.getProtectedMemeberByPublicMethod());
// console.log(overridenExampleInstance.getProtectedMemeberByPrivateMethod());
// console.log(overridenExampleInstance.getProtectedMemeberByProtectedMethod());
console.log('*** conclusion: any members can be called by public method ***');
console.log('overridenExampleInstance end');
