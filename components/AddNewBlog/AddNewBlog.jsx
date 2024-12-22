import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog';

import React, { Fragment, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const AddNewBlog = ({
  openBlogDialog,
  setOpenBlogDialog,
  blogFormData,
  setBlogFormData,
  handleSaveBlogData,
}) => {
  return (
    <div className="flex flex-col my-3 mx-3">
      <Button onClick={() => setOpenBlogDialog(true)} className="w-[200px]  ">
        Add New Blog Section
      </Button>
      <Dialog open={openBlogDialog} onOpenChange={setOpenBlogDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogTitle></DialogTitle>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                value={blogFormData.title}
                className="col-span-3"
                onChange={(e) =>
                  setBlogFormData({ ...FormData, title: e.target.value })
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                value={blogFormData.description}
                className="col-span-3"
                onChange={(e) =>
                  setBlogFormData({ ...FormData, description: e.target.value })
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={handleSaveBlogData}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewBlog;
