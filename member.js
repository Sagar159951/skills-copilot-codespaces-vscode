function skillsMember() {
  // Get the member
  var member = Members.findOne({userId: this.userId});
  if (!member) {
    return [];
  }

  // Get the skills
  var skills = Skills.find({_id: {$in: member.skills}}).fetch();
  return skills;
}