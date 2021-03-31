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
    console.group('callMember() is called');
    console.log('this.publicMember', this.publicMember);
    console.log('this.privateMemeber', this.privateMemeber);
    console.log('this.protectedMemeber', this.protectedMemeber);
    console.log(
      '*** conclusion: protected members can be called within instance ***'
    );
    console.groupEnd();
  }

  test(): void {
    console.group('test() is called');
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
    console.groupEnd();
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
    console.group('callSuperMember() is called');
    // console.log('super.publicMember', super.publicMember);
    // console.log('super.privateMemeber', super.privateMemeber);
    // console.log('super.protectedMemeber', super.protectedMemeber);
    console.log(
      '*** conclusion: members from super can be called only by methods ***'
    );
    console.groupEnd();
  }

  testSuper(): void {
    console.group('testSuper() is called');
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
    console.groupEnd();
  }
}

class OverridenExampleClass extends ExampleClass {
  constructor(public publicMember: string, protected protectedMemeber: string) {
    super('public1', 'private1', 'protected1');
  }

  testSuper(): void {
    console.group('testSuper() is called');
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
    console.groupEnd();
  }
}

console.group('exampleInstance');
const exampleInstance = new ExampleClass('public1', 'private1', 'protected1');
console.log(exampleInstance);
exampleInstance.test();
console.group('call memeber by instance');
console.log(
  'call publicMemeber by instance:',
  exampleInstance.getPublicMemeberByPublicMethod()
);
console.log('public memeber can not be called by private method');
// console.log(exampleInstance.getPublicMemeberByPrivateMethod());
console.log('public memeber can not be called by protected method');
// console.log(exampleInstance.getPublicMemeberByProtectedMethod());
console.log(
  'call privateMemeber by instance:',
  exampleInstance.getPrivateMemeberByPublicMethod()
);
console.log('private memeber can not be called by private method');
// console.log(exampleInstance.getPrivateMemeberByPrivateMethod());
console.log('private memeber can not be called by protected method');
// console.log(exampleInstance.getPrivateMemeberByProtectedMethod());
console.log(
  'call protectedMemeber by instance:',
  exampleInstance.getProtectedMemeberByPublicMethod()
);
console.log('protected memeber can not be called by private method');
// console.log(exampleInstance.getProtectedMemeberByPrivateMethod());
console.log('protected memeber can not be called by protected method');
// console.log(exampleInstance.getProtectedMemeberByProtectedMethod());
console.groupEnd();
console.log('*** conclusion: any members can be called by public method ***');
console.log('exampleInstance end\n');
console.log('call member with getter method', exampleInstance.member);
console.log('call member with getter method', exampleInstance.callMember());
console.groupEnd();

const extendedExampleInstance = new ExtendedExampleClass(
  'public2',
  'private2',
  'protected2'
);

console.group('extendedExampleInstance');
console.log(extendedExampleInstance);
extendedExampleInstance.test();
extendedExampleInstance.testSuper();
console.group('call memeber by instance');
console.log(
  'call publicMemeber by instance:',
  extendedExampleInstance.getPublicMemeberByPublicMethod()
);
console.log('public memeber can not be called by private method');
// console.log(extendedExampleInstance.getPublicMemeberByPrivateMethod());
console.log('public memeber can not be called by protected method');
// console.log(extendedExampleInstance.getPublicMemeberByProtectedMethod());
console.log(
  'call privateMemeber by instance:',
  extendedExampleInstance.getPrivateMemeberByPublicMethod()
);
console.log('private memeber can not be called by private method');
// console.log(extendedExampleInstance.getPrivateMemeberByPrivateMethod());
console.log('private memeber can not be called by protected method');
// console.log(extendedExampleInstance.getPrivateMemeberByProtectedMethod());
console.log(
  'call protectedMemeber by instance:',
  extendedExampleInstance.getProtectedMemeberByPublicMethod()
);
console.groupEnd();
console.log('protected memeber can not be called by private method');
// console.log(extendedExampleInstance.getProtectedMemeberByPrivateMethod());
console.log('protected memeber can not be called by protected method');
// console.log(extendedExampleInstance.getProtectedMemeberByProtectedMethod());
console.log('*** conclusion: any members can be called by public method ***');
console.log('extendedExampleInstance end\n');
console.groupEnd();

const overridenExampleInstance = new OverridenExampleClass(
  'public2',
  'protected2'
);
console.group('overridenExampleInstance');
console.log(overridenExampleInstance);
overridenExampleInstance.test();
overridenExampleInstance.testSuper();
console.group('call memeber by instance');
console.log(
  'call publicMemeber by instance:',
  overridenExampleInstance.getPublicMemeberByPublicMethod()
);
console.log('public memeber can not be called by private method');
// console.log(overridenExampleInstance.getPublicMemeberByPrivateMethod());
console.log('public memeber can not be called by protected method');
// console.log(overridenExampleInstance.getPublicMemeberByProtectedMethod());
console.log(
  'call privateMemeber by instance:',
  overridenExampleInstance.getPrivateMemeberByPublicMethod()
);
console.log('private memeber can not be called by private method');
// console.log(overridenExampleInstance.getPrivateMemeberByPrivateMethod());
console.log('private memeber can not be called by protected method');
// console.log(overridenExampleInstance.getPrivateMemeberByProtectedMethod());
console.log(
  'call protectedMemeber by instance:',
  overridenExampleInstance.getProtectedMemeberByPublicMethod()
);
console.log('protected memeber can not be called by private method');
// console.log(overridenExampleInstance.getProtectedMemeberByPrivateMethod());
console.log('protected memeber can not be called by protected method');
// console.log(overridenExampleInstance.getProtectedMemeberByProtectedMethod());
console.log('*** conclusion: any members can be called by public method ***');
console.log('overridenExampleInstance end');
console.groupEnd();
