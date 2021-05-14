void main() {
  dynamic explicitDynamicType = 'hello';
  print('original explicitDynamicType: $explicitDynamicType');
  explicitDynamicType = 'hello again';
  print('modified explicitDynamicType: $explicitDynamicType');
  explicitDynamicType = 3;
  print('modified type explicitDynamicType: $explicitDynamicType\n');

  var implicitDynamicType = 'hello';
  print('original implicitDynamicType: $implicitDynamicType');
  implicitDynamicType = 'hello again';
  print('modified implicitDynamicType: $implicitDynamicType');
  // implicitDynamicType = 3;
  print("implicitly declared dynamic type can't be assigned to other types");
}