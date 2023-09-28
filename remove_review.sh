token=$1
repo_name=$2
pr_number=$3
message=$4

response=$(curl -L -H "Accept: application/vnd.github+json" -H "Authorization: Bearer $token" -H "X-GitHub-Api-Version: 2022-11-28" https://api.github.com/repos/$repo_name/pulls/$pr_number/reviews)
ids=$( echo "$response" | jq -r '.[].id')

echo "review ids are: $ids"
for id in $ids; do
    curl -L -X PUT -H "Accept: application/vnd.github+json" -H "Authorization: Bearer $token" -H "X-GitHub-Api-Version: 2022-11-28" https://api.github.com/repos/$repo_name/pulls/$pr_number/reviews/$id/dismissals -d '{"message":"$message","event":"DISMISS"}'
done