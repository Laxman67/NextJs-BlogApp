import { Dialog, DialogContent, DialogFooter } from '@radix-ui/react-dialog';

import React, { Fragment, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const AddNewBlog = ({ openBlogDialog, setOpenBlogDialog }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <>
      <Button onClick={() => setOpenBlogDialog(true)}>
        Add New Blog Section
      </Button>
      <Dialog open={openBlogDialog} onOpenChange={setOpenBlogDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                className="col-span-3"
                onChane={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                className="col-span-3"
                onChane={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddNewBlog;
