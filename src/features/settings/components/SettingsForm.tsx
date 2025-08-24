'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SettingsFormValues, SettingsSchema } from '../schema';
import { cn } from '@/shared/lib/utils';

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/shared/components/ui/form';
import { Input } from '@/shared/components/ui/input';
import { Button } from '@/shared/components/ui/button';

export function SettingsForm() {
  const defaultName = 'User Random';
  const clearedNameOnce = React.useRef(false);

  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: { name: defaultName, password: '' },
    mode: 'onChange',
  });

  const onSubmit = async (data: SettingsFormValues) => {
    console.log('save settings', data);
  };

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isDirty },
    getValues,
    setValue,
  } = form;

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3">
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-title-form text-xs font-medium">Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="User Random"
                  className={cn(
                    'border-form-border h-12 w-full rounded-lg border bg-white px-4',
                    'focus:ring-brand-green text-sm outline-none placeholder:text-black focus:ring-2',
                  )}
                  onFocus={() => {
                    if (!clearedNameOnce.current && getValues('name') === defaultName) {
                      clearedNameOnce.current = true;
                      setValue('name', '', { shouldDirty: true, shouldTouch: true });
                    }
                  }}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-title-form text-xs font-medium">Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter password"
                  className={cn(
                    'border-form-border h-12 w-full rounded-lg border bg-white px-4',
                    'focus:ring-brand-green placeholder:text-title-form text-sm outline-none focus:ring-2',
                  )}
                  {...field}
                />
              </FormControl>
              <p className="text-title-form text-xs">
                Your password is between 4 and 12 characters
              </p>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
        />

        <div className="flex justify-end pt-2">
          <Button
            type="submit"
            disabled={isSubmitting || !isDirty}
            className={cn(
              'bg-brand-green h-10 min-w-[240px] rounded-md font-medium text-white',
              'disabled:cursor-not-allowed disabled:opacity-60',
            )}
          >
            {isSubmitting ? 'Saving...' : 'Save'}
          </Button>
        </div>
      </form>
    </Form>
  );
}
