version="v1.1.12"

if [  $(git tag -l "$version") ]; then
    echo yes
else
    echo no
fi