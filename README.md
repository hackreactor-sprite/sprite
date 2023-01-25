Welcome to the Up
# Up
E-commerce website

# How to get started
Run the following terminal commands in sequence:
```
npm install
npm run build
npm start
```

# How to push changes to your branch
# If you do not already have a feature branch:
Create a new branch that is based off the the updated main branch by running:

```
git checkout -b <branch name>
```

# If you already have a feature branch:
Switch to your branch by running:

```
git checkout <branch name>
```

# pull requests if branch does not already exist on GitHub
```
git push -u origin <branch name>
```


# pull request if it already exists on GitHub
confirm your upstream branch and push
```
git branch -vv
git push
```


# Staying up top date with main
If remote main branch gets updated, pull the changes down to your local branch main by running:
```
git checkout main
git pull
```

Switch to your branch and make sure it is up to date with main branch by running:
```
git checkout <branch name>
git merge main
```

