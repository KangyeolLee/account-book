import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export function NotIn(property: string, validationOptions?: ValidationOptions) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'NotIn',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [property],
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const releatedValue = (args.object as any)[relatedPropertyName];
          return (
            typeof value === 'string' &&
            typeof releatedValue === 'string' &&
            !releatedValue.includes(value)
          );
        },
      },
    });
  };
}
