## Git learning

### Import a new project

1. 假设有初始化项目``spring-boot-test``，使用``git init``作为一个Git版本控制：

   ```shell
   $ cd spring-boot-test
   $ git init
   ```

   此时Git响应：``Initialized empty Git repository int .git/``，意味着初始化一个工作文件，在项目中会创建一个名为``.git``文件夹。

2. 使用``git add``命令，告诉Git拿取*快照*（当前文件夹中的所有文件内容）

   ```shell 
   $ git add 
   ```

   这个快照被临时存储在一个临时暂存区域，Git把这块区域称为“index”

3. 通过使用``git commit``命令，将index中存储的内容永久存储在仓库中：

   ```shell
   $ git commit [-m] [commit message]
   ```

   此时会提示输入提交信息，也可以通过参数``-m``直接添加提交信息。

### Making changes

1. 修改三个文件，通过添加这些文件的修改到index中：

```shell
$ git add file1 file2 file3 file4
```

2. 通过使用``git diff --cached``查看哪些文件将要被提交，如果没有``--cached``参数，将会显示没有添加到index中的文件信息

   ![1556809162944](/home/mappei/.config/Typora/typora-user-images/1556809162944.png)

   通过使用``git status``查看一些详细信息，会看到一些提示信息

   - 使用``reset``命令将文件从index中删除(移除文件后再次查看状态，会看到移除的文件会标红显示在未分配文件中)
   - 使用``add``命令添加新文件到index中(同理添加文件到index后重新查看状态，新增文件会变绿显示在待提交中)

   ![1556809285124](/home/mappei/.config/Typora/typora-user-images/1556809285124.png)

3. 提交最后改变 ``git commit -m file1,file2,file3 ``

4. 除了以上通过先添加文件到index，再通过commit进行提交，还可以通过参数``-a``将所有修改过得文件省去add操作直接提交文件。

   ```shell
   $ git commit -a
   ```

   **Tip**: 此时需要注意，自动提交的所有文件是已经修改过的文件，包括删除和修改，但是对于新增文件如果没有手动添加到index中，还是不会提交的。

   background：file1, file3  存在于远程仓库中，但是file4是新创建的文件

   通过查看状态可以明显看到通过``-a``参数提交的文件存在与``Changes not staged for commit``

   ![1556810618947](/home/mappei/.config/Typora/typora-user-images/1556810618947.png)

### Git tracks content not files

很多版本控制都提供``add``命令，告诉系统开始对新文件的跟踪，Git中提供的``add``命令包含了对新文件和新修改的文件的跟踪，基于以上两种情况，Git获取了提供文件的*快照*，并且存储了修改内容在index中，为下一次提交做准备。

### Viewing project history

- 查看修改的任何历史记录

  ```shell
  $ git log
  ```

- 查看每次提交记录的详细信息，具体到文件修改信息，类似于查看单次提交详细信息

  ```shell
  $ git diff --cached
  $ git log -p
  ```

  ![1556812573765](/home/mappei/.config/Typora/typora-user-images/1556812573765.png)

  前者是在添加修改内容到index后查看本次修改的详细信息；后者会展示出每次commit所修改的详细信息。

- 了解提交的大概信息，主要包括提交信息，修改的文件，日期，作者等

  ```shell
  $ git log --stat --summary
  ```

  ![1556813592884](/home/mappei/.config/Typora/typora-user-images/1556813592884.png)

### Managing branches

一个Git仓库中可以包含多个开发分支

1. 创建``branch-1，branch-2``两分支

   ```she
   $ git branch branch-1
   $ git branch branch-2
   ```

2. 查看当前存在的分支,星号标记当前所在分支：

   ```shell
   $ git branch
   ```

   ![1556814643426](/home/mappei/.config/Typora/typora-user-images/1556814643426.png)

3. 切换分支

   ```shell
   $ git checkout branch-1
   ```

   ![1556814849299](/home/mappei/.config/Typora/typora-user-images/1556814849299.png)

4. 在branch-2中修改文件sub-file1，再切换到master分支中同样修改sub-file1，此时合并branch-2到当前master分支，提示合并冲突使用``git diff``显示冲突

   ```shell
   $ git diff
   ```

   ![1556815887250](/home/mappei/.config/Typora/typora-user-images/1556815887250.png)

5. 解决冲突后提交文件

   ```shell
   $ git commit -a
   ```

6. 删除分支

   ```shell
   $ git branch -d branch-2
   ```

### Using Git for collaboration

### Exploring history

```shell
$ git log
```

1. 返回结果的第一行提供了提交名称，查看某个指定提交详情

   ```shell
   $ git show 2d5f6f3   #the first few characters of the name are usually enough
   $ git show HEAD      #the tip of the current branch
   $ git show branch-2  #the tip of the "branch-2" branch
   ```

   ![1556818582188](/home/mappei/.config/Typora/typora-user-images/1556818582188.png)

2. 查看当前提交的父级提交信息

   ```shell
   $ git show HEAD^
   $ git show HEAD^^
   $ git show HEAD~5  #显示第六次提交信息
   ```

### 上传本地仓库到远程仓库

首先要在远程仓库创建仓库，远程仓库创建成功后，此时在GitHub上会有三种本地仓库上传到本地仓库的三种方式：

![1556802096791](/home/mappei/.config/Typora/typora-user-images/1556802096791.png)

- 没有创建本地仓库的提交

  在项目目录下打开终端，执行上述命令

  ```shell
  git init
  git add README.md
  git commit -m "提交信息"
  git remote add origin http://github.com/mappei/test.git
  git push -u origin master
  ```

- 存在本地仓库的本地提交

  在项目目录下打开终端，执行上述命令

  ```shell
  git remote add origin http://github.com/mappei/test.git
  git push -u origin master
  ```

- 通过导入存在的项目到当前远程仓库中：点击导入代码，会提示输入项目的gitHub的URL即可导入成功

  **Tips**: 上述所有关于本地仓库的操作都在本地项目所在目录，i.g. ``~/IdeaProject/spring-boot``

## Git Somthing 

1. 查看Git记录

   ```shell
   git log
   ```

2. 修改历史提交中的commit message：

   - 显示近两次提交信息

   ```shell
   git rebase -i HEAD~2
   ```

   ![1556805363260](/home/mappei/.config/Typora/typora-user-images/1556805363260.png)

   - 将需要修改的message对应的`` pick``改为``edit``， 修改保存后出现一下提示信息：

     ![1556805505239](/home/mappei/.config/Typora/typora-user-images/1556805505239.png)

   - 使用``git commit --amend``修改提交，根据提示信息修改完成后，使用``git rebase --continue``完成修改，修改成功后如下图所示：

     ![1556805765654](/home/mappei/.config/Typora/typora-user-images/1556805765654.png)

   - 可以使用``git log``查看修改结果