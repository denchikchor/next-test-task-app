'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';
import { SettingsFormValues, SettingsSchema } from '../schema';

export function SettingsForm() {
  const defaultName = 'User Random';
  const clearedNameOnce = React.useRef(false);
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<SettingsFormValues>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: { name: defaultName, password: '' },
    mode: 'onChange',
  });

  const onSubmit = async (data: SettingsFormValues) => {
    console.log('save settings', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3">
      <div className="space-y-2">
        <label className="text-title-form text-[12px] font-medium">Name</label>
        <input
          {...register('name')}
          onFocus={() => {
            if (!clearedNameOnce.current && getValues('name') === defaultName) {
              clearedNameOnce.current = true;
              setValue('name', '', { shouldDirty: true, shouldTouch: true });
            }
          }}
          placeholder="User Random"
          className={cn(
            'border-form-border h-12 w-full rounded-[8px] border bg-white px-4',
            'focus:ring-brand-green text-[14px] outline-none placeholder:text-black focus:ring-2',
          )}
        />
        {errors.name && <p className="text-[12px] text-red-500">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-title-form text-[12px] font-medium">Password</label>
        <input
          type="password"
          {...register('password')}
          placeholder="Enter password"
          className={cn(
            'border-form-border h-12 w-full rounded-[8px] border bg-white px-4',
            'focus:ring-brand-green placeholder:text-title-form text-[14px] outline-none focus:ring-2',
          )}
        />
        <p className="text-title-form text-[12px]">Your password is between 4 and 12 characters</p>
        {errors.password && <p className="text-[12px] text-red-500">{errors.password.message}</p>}
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          disabled={isSubmitting || !isDirty}
          className={cn(
            'bg-brand-green h-10 min-w-[240px] rounded-[6px] font-medium text-white',
            'disabled:cursor-not-allowed disabled:opacity-60',
          )}
        >
          {isSubmitting ? 'Saving...' : 'Save'}
        </button>
      </div>
    </form>
  );
}
